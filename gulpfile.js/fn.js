/**
 * Functions for Gulp
 * @author Satoshi Soma (amekusa.com)
 */

function dig(obj, path, fallback = undefined) {
	path = path.split('.');
	for (let i = 0; i < path.length; i++) {
		let p = path[i];
		if (typeof obj == 'object' && p in obj) obj = obj[p];
		else return fallback;
	}
	return obj;
}

function subst(str, data, modifier = null) {
	return str.replaceAll(/{{\s*([-.\w]+)\s*}}/g, modifier
		? (_, m1) => (modifier(dig(data, m1), m1, data) || '')
		: (_, m1) => (dig(data, m1) || '')
	);
}

module.exports = {
	dig,
	subst,
};
