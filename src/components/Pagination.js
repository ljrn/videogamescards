import Component from './Component.js';
export default class Pagination extends Component {
	constructor() {
		super('ul', { name: 'class', value: 'pagination' }, [
			new Component('li', { name: 'class', value: 'disabled' }, [
				new Component('a', { name: 'href', value: '#!' }, [
					new Component(
						'i',
						{ name: 'class', value: 'material-icons' },
						'chevron_left'
					),
				]),
			]),

			new Component('li', { name: 'class', value: 'active' }, [
				new Component('a', { name: 'href', value: '#!' }, [
					new Component(
						'i',
						{ name: 'class', value: 'material-icons' },
						'chevron_left'
					),
				]),
			]),
		]);
	}
}
