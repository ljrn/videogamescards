import Component from './Component.js';

export default class ResetFavorisButton extends Component {
	constructor() {
		super('div', { name: 'class', value: 'fixed-action-btn' }, [
			new Component(
				'a',
				{ name: 'class', value: 'btn-floating btn-large black resetFavoris' },
				[
					new Component(
						'i',
						{ name: 'class', value: 'large material-icons' },
						'delete'
					),
				]
			),
		]);
	}
}
