import Component from './Component.js';
export default class Img extends Component {
	url;
	constructor(url) {
		super();
		this.url = url;
	}

	render() {
		return `<img src='${this.url}' loading="lazy">`;
	}
}
