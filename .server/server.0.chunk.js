exports.ids = [0];
exports.modules = {

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRoutes", function() { return searchRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_list_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__imports_core_module__ = __webpack_require__(113);







var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__search_component__["a" /* SearchComponent */],
    __WEBPACK_IMPORTED_MODULE_1__result_component__["a" /* ResultComponent */],
    __WEBPACK_IMPORTED_MODULE_3__results_list_component__["a" /* ResultsListComponent */]
];
var searchRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__search_component__["a" /* SearchComponent */],
        data: { roles: ['anonymous', 'user'] }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forChild(searchRoutes);
var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        imports: __WEBPACK_IMPORTED_MODULE_6__imports_core_module__["a" /* COMMON_MODULES */].concat([
            routing
        ]),
        declarations: COMPONENTS,
        exports: COMPONENTS
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imports_search_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs__);




__webpack_require__(669);
var ResultComponent = (function () {
    function ResultComponent(service, ref) {
        this.service = service;
        this.ref = ref;
        this.selected = {};
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent.prototype.ngOnDestroy = function () {
    };
    ResultComponent.prototype.highlight = function (code) {
        if (typeof code === 'undefined' || code === null) {
            return '';
        }
        return __WEBPACK_IMPORTED_MODULE_3_prismjs__["highlight"](code, __WEBPACK_IMPORTED_MODULE_3_prismjs__["languages"].javascript);
    };
    return ResultComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], ResultComponent.prototype, "selected", void 0);
ResultComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'bc-result',
        template: __webpack_require__(670),
        styles: [__webpack_require__(671)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__imports_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__imports_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object])
], ResultComponent);

var _a, _b;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, exports) {


/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				env.element.textContent = env.code;
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && p < to; ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/i,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		if(Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();


/***/ }),

/***/ 669:
/***/ (function(module, exports) {

(function() {

if (typeof self === 'undefined' || !self.Prism || !self.document) {
	return;
}

Prism.hooks.add('complete', function (env) {
	if (!env.code) {
		return;
	}

	// works only for <code> wrapped inside <pre> (not inline)
	var pre = env.element.parentNode;
	var clsReg = /\s*\bline-numbers\b\s*/;
	if (
		!pre || !/pre/i.test(pre.nodeName) ||
			// Abort only if nor the <pre> nor the <code> have the class
		(!clsReg.test(pre.className) && !clsReg.test(env.element.className))
	) {
		return;
	}

	if (env.element.querySelector(".line-numbers-rows")) {
		// Abort if line numbers already exists
		return;
	}

	if (clsReg.test(env.element.className)) {
		// Remove the class "line-numbers" from the <code>
		env.element.className = env.element.className.replace(clsReg, '');
	}
	if (!clsReg.test(pre.className)) {
		// Add the class "line-numbers" to the <pre>
		pre.className += ' line-numbers';
	}

	var match = env.code.match(/\n(?!$)/g);
	var linesNum = match ? match.length + 1 : 1;
	var lineNumbersWrapper;

	var lines = new Array(linesNum + 1);
	lines = lines.join('<span></span>');

	lineNumbersWrapper = document.createElement('span');
	lineNumbersWrapper.setAttribute('aria-hidden', 'true');
	lineNumbersWrapper.className = 'line-numbers-rows';
	lineNumbersWrapper.innerHTML = lines;

	if (pre.hasAttribute('data-start')) {
		pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
	}

	env.element.appendChild(lineNumbersWrapper);

});

}());

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"jupytangular-result\">\n    <pre [class]=\"'language-'+(selected?.language||'javascript')\"\n         [innerHTML]=\"highlight(selected?.code)\"></pre>\n</div>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(672);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(111)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host .jupytangular-result /deep/ {\n  /* Code blocks */\n  /* Inline code */ }\n  @media print {\n    :host .jupytangular-result /deep/ code[class*=\"language-\"],\n    :host .jupytangular-result /deep/ pre[class*=\"language-\"] {\n      text-shadow: none; } }\n  :host .jupytangular-result /deep/ code[class*=\"language-\"],\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] {\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    -ms-hyphens: none;\n    -moz-hyphens: none;\n    -webkit-hyphens: none;\n    hyphens: none;\n    line-height: 1.5;\n    word-spacing: normal;\n    color: black;\n    text-align: left;\n    text-shadow: 0 1px white;\n    word-break: normal;\n    word-wrap: normal;\n    white-space: pre;\n    background: none;\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4; }\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"]::-moz-selection,\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] ::-moz-selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"]::-moz-selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"] ::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc; }\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"]::selection,\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] ::selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"]::selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"] ::selection {\n    text-shadow: none;\n    background: #b3d4fc; }\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] {\n    padding: 0;\n    display: block; }\n  :host .jupytangular-result /deep/ :not(pre) > code[class*=\"language-\"] {\n    padding: 0.1em;\n    white-space: normal;\n    border-radius: 0.3em; }\n  :host .jupytangular-result /deep/ .token.comment,\n  :host .jupytangular-result /deep/ .token.prolog,\n  :host .jupytangular-result /deep/ .token.doctype,\n  :host .jupytangular-result /deep/ .token.cdata {\n    color: slategray; }\n  :host .jupytangular-result /deep/ .token.punctuation {\n    color: #999; }\n  :host .jupytangular-result /deep/ .namespace {\n    opacity: 0.7; }\n  :host .jupytangular-result /deep/ .token.property,\n  :host .jupytangular-result /deep/ .token.tag,\n  :host .jupytangular-result /deep/ .token.boolean,\n  :host .jupytangular-result /deep/ .token.number,\n  :host .jupytangular-result /deep/ .token.constant,\n  :host .jupytangular-result /deep/ .token.symbol,\n  :host .jupytangular-result /deep/ .token.deleted {\n    color: #905; }\n  :host .jupytangular-result /deep/ .token.selector,\n  :host .jupytangular-result /deep/ .token.attr-name,\n  :host .jupytangular-result /deep/ .token.string,\n  :host .jupytangular-result /deep/ .token.char,\n  :host .jupytangular-result /deep/ .token.builtin,\n  :host .jupytangular-result /deep/ .token.inserted {\n    color: #690; }\n  :host .jupytangular-result /deep/ .token.operator,\n  :host .jupytangular-result /deep/ .token.entity,\n  :host .jupytangular-result /deep/ .token.url,\n  :host .jupytangular-result /deep/ .language-css .token.string,\n  :host .jupytangular-result /deep/ .style .token.string {\n    color: #a67f59;\n    background: rgba(255, 255, 255, 0.5); }\n  :host .jupytangular-result /deep/ .token.atrule,\n  :host .jupytangular-result /deep/ .token.attr-value,\n  :host .jupytangular-result /deep/ .token.keyword {\n    color: #07a; }\n  :host .jupytangular-result /deep/ .token.function {\n    color: #dd4a68; }\n  :host .jupytangular-result /deep/ .token.regex,\n  :host .jupytangular-result /deep/ .token.important,\n  :host .jupytangular-result /deep/ .token.variable {\n    color: #e90; }\n  :host .jupytangular-result /deep/ .token.important,\n  :host .jupytangular-result /deep/ .token.bold {\n    font-weight: bold; }\n  :host .jupytangular-result /deep/ .token.italic {\n    font-style: italic; }\n  :host .jupytangular-result /deep/ .token.entity {\n    cursor: help; }\n  :host .jupytangular-result /deep/ pre.line-numbers {\n    position: relative;\n    padding-left: 3.8em;\n    counter-reset: linenumber; }\n  :host .jupytangular-result /deep/ pre.line-numbers > code {\n    position: relative;\n    white-space: inherit; }\n  :host .jupytangular-result /deep/ .line-numbers .line-numbers-rows {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    font-size: 100%;\n    left: -3.8em;\n    width: 3em;\n    /* works for line-numbers below 1000 lines */\n    letter-spacing: -1px;\n    border-right: 1px solid #999;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  :host .jupytangular-result /deep/ .line-numbers-rows > span {\n    pointer-events: none;\n    display: block;\n    counter-increment: linenumber; }\n  :host .jupytangular-result /deep/ .line-numbers-rows > span:before {\n    content: counter(linenumber);\n    color: #999;\n    display: block;\n    padding-right: 0.8em;\n    text-align: right; }\n", ""]);

// exports


/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imports_search_service__ = __webpack_require__(112);



var SearchComponent = (function () {
    function SearchComponent(service, ref) {
        this.service = service;
        this.ref = ref;
        this.selected = {};
        this.results = [];
        this.query = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultsSub = this.service.results(this.query).subscribe(function (r) {
            _this.results = r;
            _this.selected = _this.results[0];
            _this.ref.detectChanges();
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        if (typeof this.resultsSub !== 'undefined') {
            this.resultsSub.unsubscribe();
        }
    };
    SearchComponent.prototype.search = function () {
        this.service.search(this.query).subscribe(function (r) {
            console.log(r);
        });
    };
    return SearchComponent;
}());
SearchComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'bc-search',
        template: __webpack_require__(674),
        styles: [__webpack_require__(675)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__imports_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__imports_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"jupytangular-search\">\n    <div class=\"result-scroll\">\n        <bc-result [selected]=\"selected\"></bc-result>\n    </div>\n    <form>\n        <md-input-container>\n            <input mdInput name=\"search\" required type=\"text\"\n                   placeholder=\"Search\" autocomplete=\"off\"\n                   maxlength=\"100\" [(ngModel)]=\"query\" (change)=\"search()\">\n        </md-input-container>\n        <div class=\"results-wrapper\">\n            <bc-results-list (change)=\"selected=$event\" [results]=\"results\"></bc-results-list>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(676);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(111)(undefined);
// imports


// module
exports.push([module.i, ":host .jupytangular-search {\n  display: flex;\n  height: 100%; }\n  :host .jupytangular-search form {\n    width: 200px;\n    flex-basis: 200px;\n    flex-grow: 0;\n    flex-shrink: 0;\n    overflow: hidden;\n    display: none;\n    flex-direction: column; }\n  :host .jupytangular-search .result-scroll,\n  :host .jupytangular-search .results-wrapper {\n    display: block;\n    max-height: 100%;\n    max-width: 100%;\n    overflow: auto; }\n  :host .jupytangular-search .result-scroll {\n    display: none;\n    padding: 20px; }\n  :host .jupytangular-search md-input-container {\n    width: 100%; }\n\n/deep/ .expanded .jupytangular-search[class] .result-scroll[class] {\n  display: block; }\n\n/deep/ .expanded .jupytangular-search[class] form[class] {\n  display: flex; }\n", ""]);

// exports


/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


var ResultsListComponent = (function () {
    function ResultsListComponent() {
        this.selected = {};
        this.change = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.results = [];
    }
    ResultsListComponent.prototype.ngOnInit = function () {
        this.selected = this.results[0];
    };
    ResultsListComponent.prototype.getLineCount = function (r) {
        return r.code.split('\n').length;
    };
    ResultsListComponent.prototype.getGeneralizedFilename = function (filename) {
        var segments = filename.split('/');
        var parts = [];
        for (var j = 0; j < segments.length - 1; j++) {
            parts.push(segments.slice(0, j).join('/'));
        }
        var matching = {};
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var result = _a[_i];
            for (var _b = 0, parts_1 = parts; _b < parts_1.length; _b++) {
                var part = parts_1[_b];
                if (result.filename.indexOf(part) > -1) {
                    matching[part] = (typeof matching[part] !== 'undefined'
                        ? matching[part]
                        : 0) + 1;
                }
            }
        }
        var matchingFiles = {};
        for (var m in matching) {
            if (matching.hasOwnProperty(m)) {
                if (matching[m] > 5) {
                    matchingFiles[m] = filename.replace(m, '...');
                }
            }
        }
        return Object.keys(matchingFiles)
            .map(function (k) { return matchingFiles[k]; })
            .sort(function (a, b) { return b.length - a.length; })
            .pop() || filename;
    };
    return ResultsListComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], ResultsListComponent.prototype, "selected", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Output */])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ResultsListComponent.prototype, "change", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], ResultsListComponent.prototype, "results", void 0);
ResultsListComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'bc-results-list',
        template: __webpack_require__(678),
        styles: [__webpack_require__(679)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [])
], ResultsListComponent);

var _a;
//# sourceMappingURL=results-list.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"jupytangular-results-list\">\n    <a md-button (click)=\"(selected=r) && change.emit(r)\" [class]=\"'language-'+(r.language||'javascript')\"\n       [class.selected]=\"selected == r\"\n       *ngFor=\"let r of results\">\n        <span>{{ getGeneralizedFilename(r.filename) }}</span>\n        <span>{{ r.language }}</span>\n        <span>{{ getLineCount(r) }}</span>\n    </a>\n</div>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(680);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(111)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host .jupytangular-results-list {\n  display: flex;\n  flex-direction: column; }\n  :host .jupytangular-results-list a {\n    padding: 10px;\n    cursor: pointer;\n    position: relative; }\n  :host .jupytangular-results-list a:hover {\n    background: #EEEEEE; }\n  :host .jupytangular-results-list a /deep/ .mat-button-wrapper {\n    display: flex;\n    flex-wrap: wrap; }\n  :host .jupytangular-results-list a /deep/ .mat-button-wrapper span:first-child {\n    overflow: hidden;\n    overflow-wrap: break-word;\n    width: 100%; }\n  :host .jupytangular-results-list a /deep/ span {\n    width: 100%;\n    overflow-wrap: break-word;\n    flex-shrink: 0; }\n  :host .jupytangular-results-list a.selected {\n    background: #EEEEEE; }\n  :host .jupytangular-results-list a /deep/ .mat-button-wrapper > span:nth-child(2),\n  :host .jupytangular-results-list a /deep/ .mat-button-wrapper > span:nth-child(3) {\n    width: 50%;\n    color: #999999; }\n  :host .jupytangular-results-list a /deep/ .mat-button-wrapper > span:nth-child(3) {\n    text-align: right; }\n", ""]);

// exports


/***/ })

};;
//# sourceMappingURL=server.bundle.map