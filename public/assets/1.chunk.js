webpackJsonpng_seed__name_([1],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordingRoutes", function() { return recordingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordingModule", function() { return RecordingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imports_core_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recording_component__ = __webpack_require__(371);





var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__recording_component__["a" /* RecordingComponent */]
];
var recordingRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__recording_component__["a" /* RecordingComponent */],
        data: { roles: ['anonymous', 'user'] }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(recordingRoutes);
var RecordingModule = (function () {
    function RecordingModule() {
    }
    return RecordingModule;
}());
RecordingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: __WEBPACK_IMPORTED_MODULE_3__imports_core_module__["a" /* COMMON_MODULES */].concat([
            routing
        ]),
        declarations: COMPONENTS,
        exports: COMPONENTS
    })
], RecordingModule);



/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(359);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host .record-wrapper /deep/,\n:host .jupytangular-result /deep/ {\n  /* Code blocks */\n  /* Inline code */ }\n  @media print {\n    :host .record-wrapper /deep/ code[class*=\"language-\"],\n    :host .record-wrapper /deep/ pre[class*=\"language-\"],\n    :host .jupytangular-result /deep/ code[class*=\"language-\"],\n    :host .jupytangular-result /deep/ pre[class*=\"language-\"] {\n      text-shadow: none; } }\n  :host .record-wrapper /deep/ code[class*=\"language-\"],\n  :host .record-wrapper /deep/ pre[class*=\"language-\"],\n  :host .jupytangular-result /deep/ code[class*=\"language-\"],\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] {\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    -ms-hyphens: none;\n    -moz-hyphens: none;\n    -webkit-hyphens: none;\n    hyphens: none;\n    line-height: 1.5;\n    word-spacing: normal;\n    color: black;\n    text-align: left;\n    text-shadow: 0 1px white;\n    word-break: normal;\n    word-wrap: normal;\n    white-space: pre;\n    background: none;\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4; }\n  :host .record-wrapper /deep/ pre[class*=\"language-\"]::-moz-selection,\n  :host .record-wrapper /deep/ pre[class*=\"language-\"] ::-moz-selection,\n  :host .record-wrapper /deep/ code[class*=\"language-\"]::-moz-selection,\n  :host .record-wrapper /deep/ code[class*=\"language-\"] ::-moz-selection,\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"]::-moz-selection,\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] ::-moz-selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"]::-moz-selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"] ::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc; }\n  :host .record-wrapper /deep/ pre[class*=\"language-\"]::selection,\n  :host .record-wrapper /deep/ pre[class*=\"language-\"] ::selection,\n  :host .record-wrapper /deep/ code[class*=\"language-\"]::selection,\n  :host .record-wrapper /deep/ code[class*=\"language-\"] ::selection,\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"]::selection,\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] ::selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"]::selection,\n  :host .jupytangular-result /deep/ code[class*=\"language-\"] ::selection {\n    text-shadow: none;\n    background: #b3d4fc; }\n  :host .record-wrapper /deep/ pre[class*=\"language-\"],\n  :host .jupytangular-result /deep/ pre[class*=\"language-\"] {\n    padding: 0;\n    display: block; }\n  :host .record-wrapper /deep/ :not(pre) > code[class*=\"language-\"],\n  :host .jupytangular-result /deep/ :not(pre) > code[class*=\"language-\"] {\n    padding: 0.1em;\n    white-space: normal;\n    border-radius: 0.3em; }\n  :host .record-wrapper /deep/ .token.comment,\n  :host .record-wrapper /deep/ .token.prolog,\n  :host .record-wrapper /deep/ .token.doctype,\n  :host .record-wrapper /deep/ .token.cdata,\n  :host .jupytangular-result /deep/ .token.comment,\n  :host .jupytangular-result /deep/ .token.prolog,\n  :host .jupytangular-result /deep/ .token.doctype,\n  :host .jupytangular-result /deep/ .token.cdata {\n    color: slategray; }\n  :host .record-wrapper /deep/ .token.punctuation,\n  :host .jupytangular-result /deep/ .token.punctuation {\n    color: #999; }\n  :host .record-wrapper /deep/ .namespace,\n  :host .jupytangular-result /deep/ .namespace {\n    opacity: 0.7; }\n  :host .record-wrapper /deep/ .token.property,\n  :host .record-wrapper /deep/ .token.tag,\n  :host .record-wrapper /deep/ .token.boolean,\n  :host .record-wrapper /deep/ .token.number,\n  :host .record-wrapper /deep/ .token.constant,\n  :host .record-wrapper /deep/ .token.symbol,\n  :host .record-wrapper /deep/ .token.deleted,\n  :host .jupytangular-result /deep/ .token.property,\n  :host .jupytangular-result /deep/ .token.tag,\n  :host .jupytangular-result /deep/ .token.boolean,\n  :host .jupytangular-result /deep/ .token.number,\n  :host .jupytangular-result /deep/ .token.constant,\n  :host .jupytangular-result /deep/ .token.symbol,\n  :host .jupytangular-result /deep/ .token.deleted {\n    color: #905; }\n  :host .record-wrapper /deep/ .token.selector,\n  :host .record-wrapper /deep/ .token.attr-name,\n  :host .record-wrapper /deep/ .token.string,\n  :host .record-wrapper /deep/ .token.char,\n  :host .record-wrapper /deep/ .token.builtin,\n  :host .record-wrapper /deep/ .token.inserted,\n  :host .jupytangular-result /deep/ .token.selector,\n  :host .jupytangular-result /deep/ .token.attr-name,\n  :host .jupytangular-result /deep/ .token.string,\n  :host .jupytangular-result /deep/ .token.char,\n  :host .jupytangular-result /deep/ .token.builtin,\n  :host .jupytangular-result /deep/ .token.inserted {\n    color: #690; }\n  :host .record-wrapper /deep/ .token.operator,\n  :host .record-wrapper /deep/ .token.entity,\n  :host .record-wrapper /deep/ .token.url,\n  :host .record-wrapper /deep/ .language-css .token.string,\n  :host .record-wrapper /deep/ .style .token.string,\n  :host .jupytangular-result /deep/ .token.operator,\n  :host .jupytangular-result /deep/ .token.entity,\n  :host .jupytangular-result /deep/ .token.url,\n  :host .jupytangular-result /deep/ .language-css .token.string,\n  :host .jupytangular-result /deep/ .style .token.string {\n    color: #a67f59;\n    background: rgba(255, 255, 255, 0.5); }\n  :host .record-wrapper /deep/ .token.atrule,\n  :host .record-wrapper /deep/ .token.attr-value,\n  :host .record-wrapper /deep/ .token.keyword,\n  :host .jupytangular-result /deep/ .token.atrule,\n  :host .jupytangular-result /deep/ .token.attr-value,\n  :host .jupytangular-result /deep/ .token.keyword {\n    color: #07a; }\n  :host .record-wrapper /deep/ .token.function,\n  :host .jupytangular-result /deep/ .token.function {\n    color: #dd4a68; }\n  :host .record-wrapper /deep/ .token.regex,\n  :host .record-wrapper /deep/ .token.important,\n  :host .record-wrapper /deep/ .token.variable,\n  :host .jupytangular-result /deep/ .token.regex,\n  :host .jupytangular-result /deep/ .token.important,\n  :host .jupytangular-result /deep/ .token.variable {\n    color: #e90; }\n  :host .record-wrapper /deep/ .token.important,\n  :host .record-wrapper /deep/ .token.bold,\n  :host .jupytangular-result /deep/ .token.important,\n  :host .jupytangular-result /deep/ .token.bold {\n    font-weight: bold; }\n  :host .record-wrapper /deep/ .token.italic,\n  :host .jupytangular-result /deep/ .token.italic {\n    font-style: italic; }\n  :host .record-wrapper /deep/ .token.entity,\n  :host .jupytangular-result /deep/ .token.entity {\n    cursor: help; }\n  :host .record-wrapper /deep/ pre.line-numbers,\n  :host .jupytangular-result /deep/ pre.line-numbers {\n    position: relative;\n    padding-left: 3.8em;\n    counter-reset: linenumber; }\n  :host .record-wrapper /deep/ pre.line-numbers > code,\n  :host .jupytangular-result /deep/ pre.line-numbers > code {\n    position: relative;\n    white-space: inherit; }\n  :host .record-wrapper /deep/ .line-numbers .line-numbers-rows,\n  :host .jupytangular-result /deep/ .line-numbers .line-numbers-rows {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    font-size: 100%;\n    left: -3.8em;\n    width: 3em;\n    /* works for line-numbers below 1000 lines */\n    letter-spacing: -1px;\n    border-right: 1px solid #999;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  :host .record-wrapper /deep/ .line-numbers-rows > span,\n  :host .jupytangular-result /deep/ .line-numbers-rows > span {\n    pointer-events: none;\n    display: block;\n    counter-increment: linenumber; }\n  :host .record-wrapper /deep/ .line-numbers-rows > span:before,\n  :host .jupytangular-result /deep/ .line-numbers-rows > span:before {\n    content: counter(linenumber);\n    color: #999;\n    display: block;\n    padding-right: 0.8em;\n    text-align: right; }\n", ""]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs__);



var RecordingComponent = RecordingComponent_1 = (function () {
    function RecordingComponent(ref) {
        this.ref = ref;
        this.recording = false;
        this.events = [
            "\n    this.waitForVisible('bc-funnel-billing');\n    library.setCardholderName(browser, 'Selenium Test');\n    library.setCardNumber(browser, '4111111111111111');\n    this.keys('Tab');\n    this.keys('Enter');\n    this.waitForVisible('[id=\"md-option-0\"]');\n    this.click('[id=\"md-option-0\"]');\n    library.setCVV(browser, '5454');\n    this.keys('Tab');\n    this.keys('Enter');\n    this.waitForVisible('[id=\"md-option-6\"]');\n    this.click('[id=\"md-option-6\"]');\n    this.keys('Tab');\n    this.keys('Enter');\n    this.waitForVisible('[id=\"md-option-20\"]');\n    this.click('[id=\"md-option-20\"]');\n    library.setAddress(browser, '12345');\n    this.keys('Tab');\n    this.keys('Enter');\n    this.waitForVisible('[id=\"md-option-46\"]');\n    this.click('[id=\"md-option-277\"]');\n    library.setState(browser, 'Arizona');\n    library.setCity(browser, 'Scottsdale');\n    library.setZipCode(browser, '85258');\n    ".split('\n').map(function (s) { return ({
                label: s.trim()
            }); })
        ];
        this.eventOutput = this.highlight(this.events.map(function (e) { return e.label; }).join(''));
    }
    RecordingComponent.getArrayXPath = function (selector, ctx) {
        if (typeof ctx === 'undefined') {
            ctx = document;
        }
        var iterator = document.evaluate(selector, ctx, void 0, XPathResult.ORDERED_NODE_ITERATOR_TYPE, void 0);
        var co = [];
        var m = iterator.iterateNext();
        while (m) {
            co.push(m);
            m = iterator.iterateNext();
        }
        return co;
    };
    RecordingComponent.convertXPathToCss = function (path) {
        return path
            .replace(/\/([a-z-]+)\[@id="(.*?)"]/ig, '/$1#$2')
            .replace(/\/([^\/]+)\[contains\(@class, "(.*?)"\)]/ig, '/$1.$2')
            .replace(/\/parent::[a-z-]+\/[a-z-]+\[([0-9]+)]/ig, ':nth-child($1)')
            .replace(/^\/\//ig, '')
            .replace(/\/\//ig, ' ')
            .replace(/\//ig, ' > ');
    };
    RecordingComponent.prototype.onClick = function (event) {
        if (!this.recording) {
            return;
        }
        console.log(event);
        if (event.type === 'click') {
            var path = this.elementToXPath(event.path);
            if (typeof path === 'undefined') {
                return;
            }
            this.events.push({
                label: "browser.click('" + RecordingComponent_1.convertXPathToCss(path) + "');\n"
            });
        }
        this.eventOutput = this.highlight(this.events.map(function (e) { return e.label; }).join(''));
        this.ref.detectChanges();
    };
    RecordingComponent.prototype.highlight = function (code) {
        if (typeof code === 'undefined' || code === null) {
            return '';
        }
        return __WEBPACK_IMPORTED_MODULE_2_prismjs__["highlight"](code, __WEBPACK_IMPORTED_MODULE_2_prismjs__["languages"].javascript);
    };
    RecordingComponent.prototype.elementToXPath = function (path) {
        var addSegment = function (elem) {
            if (typeof elem === 'undefined' || elem === null) {
                return '/';
            }
            var tag = elem.nodeName;
            var id = false;
            if (typeof elem.getAttribute === 'function') {
                id = elem.getAttribute('id');
            }
            var className = false;
            if (typeof elem.classList !== 'undefined') {
                className = elem.classList[0];
            }
            var countTypes = 0;
            if (typeof elem.parentElement !== 'undefined' && elem.parentElement !== null) {
                for (var e = 0; e < elem.parentElement.children.length; e++) {
                    var el = elem.parentElement.children[e];
                    if (el.nodeName === elem.nodeName) {
                        countTypes += 1;
                    }
                    if (el === elem) {
                        break;
                    }
                }
            }
            return "" + (tag
                ? tag : '') + (id
                ? "[@id=\"" + id + "\"]" : '') + (className
                ? "[contains(@class, \"" + className + "\")]" : '') + (countTypes > 0
                ? "/parent::" + elem.parentElement.nodeName + "/" + tag + "[" + countTypes + "]" : '');
        };
        var pathStack = [];
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var currentEl = path_1[_i];
            pathStack.unshift(addSegment(currentEl));
            if (currentEl.nodeName === 'BODY') {
                break;
            }
            if (currentEl.nodeName === 'APP-ROOT') {
                return;
            }
        }
        var fullPath = '//*[not(./app-root)]//' + pathStack.join('/');
        var matches = RecordingComponent_1.getArrayXPath(fullPath);
        if (matches.length !== 1) {
            throw new Error('Can\'t do anything right!');
        }
        var combinations = [];
        for (var i = 1; i < pathStack.length; i++) {
            for (var j = 1; j < i; j++) {
                var segments = (pathStack.slice(j, i).concat([
                    '',
                    pathStack[pathStack.length - 1]
                ])).join('/');
                combinations.push('//' + segments);
            }
        }
        var minimal = combinations
            .filter(function (c) { return RecordingComponent_1.getArrayXPath(c).length === 1; })
            .sort(function (a, b) { return a.length - b.length; });
        return minimal[0];
    };
    return RecordingComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('document:click', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:returntype", void 0)
], RecordingComponent.prototype, "onClick", null);
RecordingComponent = RecordingComponent_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'bc-recording',
        template: __webpack_require__(372),
        styles: [
            __webpack_require__(358),
            __webpack_require__(373)
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
], RecordingComponent);

var RecordingComponent_1, _a;


/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<div class=\"record-wrapper\">\n    <header>\n        <a md-button (click)=\"recording=true\" *ngIf=\"!recording\">⏺️</a>\n        <a md-button (click)=\"recording=false\" *ngIf=\"recording\">⏸</a>\n    </header>\n\n    <div class=\"code-wrapper\">\n        <pre class=\"event-wrapper\" [innerHTML]=\"eventOutput\"></pre>\n    </div>\n</div>\n";

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(374);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, ":host .record-wrapper {\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  min-width: 200px;\n  height: 100%; }\n  :host .record-wrapper a {\n    padding: 5px;\n    font-size: 30px;\n    line-height: 30px;\n    z-index: 100;\n    height: 40px;\n    width: 40px; }\n  :host .record-wrapper .code-wrapper {\n    max-height: 100%;\n    overflow: auto;\n    padding: 20px;\n    flex-basis: 100%; }\n  :host .record-wrapper pre {\n    white-space: pre; }\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=1.map