/**
	字符串处理
**/

export function replaceTemplate (template, obj) {
  const strExp = /\$\s*\{([a-zA-Z_-]+)\}/g;
	return template.replace(strExp, (match, key) => {
		return obj[key] == null ? '' : obj[key];
	});
}
