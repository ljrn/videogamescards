import Component from './Component.js';
import Favoris from '../Favoris.js';

export default class FloatingFavButton extends Component {
	constructor(name) {
		let star;
		if (Favoris.isGameinFav({ name: name })) star = 'star';
		else star = 'star_border';
		super('div', { name: 'class', value: 'fixed-action-btn' }, [
			new Component(
				'a',
				{ name: 'class', value: 'btn-floating btn-large black favbutton' },
				[
					new Component(
						'i',
						{ name: 'class', value: 'large material-icons' },
						star
					),
				]
			),
		]);
	}
}
