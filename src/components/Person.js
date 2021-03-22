import Component from '../components/Component';

export default class Person extends Component {
	nom;
	prenom;
	surnom;
	game_name;
	background_image;
	constructor(game_name, background_image, nom, prenom, surnom) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.surnom = surnom;
		this.game_name = game_name;
		this.background_image = background_image;
		/*if (game.background_image)
			this.background_image = `https://media.rawg.io/media/crop/600/400${
				game.background_image.split('media')[2]
			}`;
		else this.background_image = '/images/no_image_available.jpg';*/
	}

	render() {
		return `<div class="card gameThumbnail">
					<div class="card-image">
							<img src="${this.background_image}" loading="lazy">
					</div>
					<div class="card-content">
						<span class="card-title grey-text text-darken-4">
							<h4>${this.prenom} ${this.nom}</h4>
							<h5>Alias : ${this.surnom}</h5>
							<p>Jeu favoris: ${this.game_name}</p>
						</span>
					</div>
					<div class="card-action">
						<h6>Note : 33%</h6>
					</div>
				</div>`;
	}
}
