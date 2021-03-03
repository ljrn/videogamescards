export default class Component {
	tagName;
	attribute;
	children;

	constructor(tagName, attribute, children) {
		this.tagName = tagName;
		this.attribute = attribute;
		this.children = children;
	}

	render() {
		let html = `<${this.tagName} ${this.renderAttributes()}`;
		if (this.children) {
			html += `>${this.renderChildren()}</${this.tagName}>`;
		} else {
			html += ' />';
		}
		return html;
	}

	renderAttributes() {
		if (this.attribute) {
			if (this.attribute instanceof Array) {
				let res = '';
				this.attribute.forEach(attrib => {
					res += `${attrib.name}="${attrib.value}" `;
				});
				return res;
			} else return `${this.attribute.name}="${this.attribute.value}"`;
		}
		return '';
	}

	renderChildren() {
		if (this.children instanceof Array) {
			return this.children.reduce(
				(html, child) =>
					html + (child instanceof Component ? child.render() : child),
				''
			);
		}
		return this.children || '';
	}

	append(children) {
		this.children.append(children);
	}
}
