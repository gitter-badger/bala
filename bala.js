$ = (function(document, fn, $, Bala, i) {
	$ = function(s, context) {
		return new Bala(s, context);
	};
	Bala = function(s, context) {
		fn.push.apply(this, !s ? fn : s.nodeType || s == window ? [s] : "" + s === s ? /</.test(s) ? ((i = document.createElement(context || 'q')).innerHTML = s, i.children) : (context && $(context)[0] || document).querySelectorAll(s) : /f/.test(typeof s) ? /c/.test(document.readyState) ? s() : document.addEventListener('DOMContentLoaded', s) : s);
		return this;
	};

	$.fn = Bala.prototype = fn;

	$.one = function(s, context) {
		return $(s, context)[0] || null;
	};

	return $;

})(document, []);
