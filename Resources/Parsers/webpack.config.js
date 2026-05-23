const path = require('path');

module.exports = {
    mode: 'production', 
    entry: './languages-index-browser.js', 
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'antlr-languages.bundle.js',
        // FORCE WEBPACK TO EXPOSE THE MODULE GLOBALLY
        library: {
            name: 'AntlrLanguages', // This creates self.AntlrLanguages automatically!
            type: 'assign-properties' // Stamped straight onto the global container
        },
        globalObject: 'self' // Locks the target scope explicitly to Web Worker global
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, '../../node_modules'), 'node_modules'],
        
        // FIX: Moved 'fallback' inside the resolve block where Webpack 5 expects it
        fallback: {
            "fs": false
        },
        
        plugins: [
            {
                apply(resolver) {
                    const targetHook = resolver.ensureHook('resolve');
                    
                    resolver.getHook('described-resolve').tapAsync('AntlrBaseResolverPlugin', (request, resolveContext, callback) => {
                        const importPath = request.request;
                        if (!importPath) return callback();

                        // ROUTE A: Move relative local *Base.js requests down into the /JavaScript directory
                        if (importPath.startsWith('.') && importPath.endsWith('Base.js')) {
                            const fileName = path.basename(importPath);
                            const absoluteFileDestination = path.resolve(request.path, 'JavaScript', fileName);
                            
                            const updatedRequest = Object.assign({}, request, {
                                request: absoluteFileDestination
                            });
                            return resolver.doResolve(targetHook, updatedRequest, `Redirected Base down to JavaScript`, resolveContext, callback);
                        }

                        // ROUTE B: Bounce requests for core Lexer/Parser files made from INSIDE /JavaScript back UP one folder
                        if (importPath.startsWith('.') && 
                            request.path.endsWith('JavaScript') && 
                            (importPath.includes('Lexer') || importPath.includes('Parser')) && 
                            !importPath.endsWith('Base.js')) {
                            
                            const fileName = path.basename(importPath); // e.g., 'CLexer.js'
                            const absoluteParentDestination = path.resolve(request.path, '..', fileName);
                            
                            const updatedRequest = Object.assign({}, request, {
                                request: absoluteParentDestination
                            });
                            return resolver.doResolve(targetHook, updatedRequest, `Bounced token layer up to main lang directory`, resolveContext, callback);
                        }
                        
                        return callback();
                    });
                }
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        configFile: false,
                        presets: [
                            ['@babel/preset-env', { targets: { browsers: "last 2 versions" } }]
                        ]
                    }
                }
            }
        ]
    }
};