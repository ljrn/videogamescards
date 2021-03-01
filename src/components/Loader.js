import Component from './Component.js';
export default class Loader extends Component {
	constructor() {
		super('div', { name: 'class', value: 'preloader-wrapper big active' }, [
			new Component(
				'div',
				{ name: 'class', value: 'spinner-layer spinner-blue-only' },
				[
					new Component(
						'div',
						{ name: 'class', value: 'circle-clipper left' },
						[new Component('div', { name: 'class', value: 'circle' }, ' ')]
					),

					new Component('div', { name: 'class', value: 'gap-patch' }, [
						new Component('div', { name: 'class', value: 'circle' }, ' '),
					]),

					new Component(
						'div',
						{
							name: 'class',
							value: 'circle-clipper right',
						},
						[new Component('div', { name: 'class', value: 'circle' }, ' ')]
					),
				]
			),
		]);
	}
}
