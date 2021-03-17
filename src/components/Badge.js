import Component from './Component.js';
export default class Badge extends Component {
	text;
	caption;
	constructor(text, caption) {
		super();
		this.text = text;
		this.caption = caption;
	}

	render() {
		return `<span class='new badge black' data-badge-caption=${this.caption}>${this.text}</span>`;
	}
}
