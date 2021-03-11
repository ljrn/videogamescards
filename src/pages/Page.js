import Component from '../components/Component';

export default class Page extends Component {
	element;

	constructor(className, children) {
		super('section', { name: 'class', value: className }, children);
	}
	mount(element) {
		this.element = element;
	}

	resetPage() {
		document.onscroll = null;
		this.children = [];
	}
}
