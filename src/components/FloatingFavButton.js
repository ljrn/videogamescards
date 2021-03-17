import Component from './Component.js';
import Favoris from '../Favoris.js';

export default class FloatingFavButton extends Component {
	star;
	constructor(name) {
		super();
		if (Favoris.isGameinFav({ name: name })) this.star = 'star';
		else this.star = 'star_border';
	}

	render() {
		return `<div class="fixed-action-btn">
					<a class="btn-floating btn-large black favbutton pulse waves-effect waves-yellow">
						<i class="large material-icons">${this.star}</i>
					</a>
				</div>`;
	}
}
