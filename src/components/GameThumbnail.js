import Favoris from '../Favoris.js';
import Component from './Component.js';
import PlatformImg from './PlatformImg';

export default class GameThumbnail extends Component {
	name;
	background_image;
	released;
	metacritic;
	parent_platforms;
	id;
	slug;
	star;
	constructor(game) {
		super();
		this.name = game.name;
		this.released = game.released;
		this.metacritic = game.metacritic;
		this.id = game.id;
		this.slug = game.slug;

		this.parent_platforms = game.parent_platforms.map(plat =>
			new PlatformImg(plat.platform.name).render()
		);

		if (Favoris.isGameinFav({ name: game.name })) this.star = 'star';
		else this.star = 'star_border';

		//Permet un chargement nettement plus rapide
		if (game.background_image)
			this.background_image = `https://media.rawg.io/media/crop/600/400${
				game.background_image.split('media')[2]
			}`;
		else this.background_image = '/images/no_image_available.jpg';
	}

	render() {
		return `<div class='card gameThumbnail z-depth-3' id=${this.slug} >
					<div class='card-image waves-effect waves-block waves-light games-image '>
						<a class='btn-floating halfway-fab waves-effect waves-yellow black favbutton'>
							<i class='material-icons'>${this.star}</i>
						</a>
						<img class='responsive-img' src='${this.background_image}' loading="lazy">
					</div>
					<div class='card-content'>
						<span class='card-title activator grey-text text-darken-4'>
							<h4 class="flow-text">${this.name}</h4>
							<p class="flow-text">Date de sortie: ${this.released}</p>
							<p class="flow-text">Note Metacritic: ${this.metacritic}</p>
						</span>
					</div>
					<div class='card-action'>
						${this.parent_platforms.join('')}
					</div>
		</div>`;
	}
}
