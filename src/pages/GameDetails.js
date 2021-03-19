import Page from './Page';
import Loader from '../components/Loader';
import Component from '../components/Component';
import PlatformImg from '../components/PlatformImg';
import SliderCarousel from '../components/SliderCarousel';
import FloatingFavButton from '../components/FloatingFavButton';
import Favoris from '../Favoris.js';
import Badge from '../components/Badge';
import Img from '../components/Img';

export default class GameDetails extends Page {
	chemin;
	game;
	slider;
	parent_platforms;
	resized_image;
	constructor(chemin) {
		super('detail');
		this.chemin = chemin;
		this.game = {};
	}

	render() {
		return `
		<div class="parallax-container">
			<div class="parallax"><img src="${this.resized_image}"></div>
	  	</div>
		<section class="detail">
			<h1 class="">${this.game.name}</h1>
			${this.parent_platforms}
			${this.game.genres}
			<h2 class="">Released: ${this.game.released}</h2>
			<h3 class="">Note Metacritic: ${this.game.metacritic}</h3>
			<p></p>
			${this.game.description}
			${this.game.favButton}
			${this.slider}
		</section>
		`;
	}

	getInfos() {
		const promise1 = fetch(
			`https://api.rawg.io/api/games/${this.chemin}?key=6b30690e274446c997ad25f8f19e1215`
		)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.game = responseJSON;
				this.parent_platforms = this.game.parent_platforms.map(
					plat => new PlatformImg(plat.platform.name)
				);

				if (!this.game.background_image)
					this.resized_image = '/images/no_image_available.jpg';
				else
					this.resized_image = `https://media.rawg.io/media/resize/1280/-${
						this.game.background_image.split('media')[2]
					}`;

				this.parent_platforms = new Component(
					'div',
					{ name: 'class', value: 'card-action platform-detail' },
					this.parent_platforms
				).render();

				this.game.description = new Component(
					'p',
					null,
					this.game.description
				).render();

				this.game.genres = new Component(
					'h4',
					null,
					this.game.genres.map(genre => new Badge(genre.name, ''))
				).render();

				this.game.favButton = new FloatingFavButton(this.game.name).render();
				return responseJSON;
			})
			.catch(error => {
				console.error(error);
			});

		const promise2 = fetch(
			`https://api.rawg.io/api/games/${this.chemin}/screenshots?key=6b30690e274446c997ad25f8f19e1215&page_size=30`
		)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.slider = new SliderCarousel(responseJSON.results).render();
			})
			.catch(error => {
				console.error(error);
			});

		// Attend la fin de toutes les promesses avant de render
		Promise.all([promise1, promise2]).then(values => {
			if (values[0]) {
				this.element.innerHTML = this.render();

				const carousel = this.element.querySelector('.carousel');
				const instances = M.Carousel.init(carousel, {
					fullWidth: true,
					indicators: true,
				});

				const parallax = document.querySelector('.parallax');
				const pInstances = M.Parallax.init(parallax, {
					responsiveThreshold: 0,
				});

				M.toast({
					html: `Si le jeu vous plait n'hésitez pas à l'ajouter dans vos favoris !`,
					displayLength: 2000,
				});
				this.handleAddFavorites();
			} else
				this.element.innerHTML = `<img class='not_found' src='/images/404.png'>`;
		});
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = new Loader().render();
		this.getInfos();
	}

	handleAddFavorites() {
		const button = this.element.querySelector('.favbutton');
		button.addEventListener('click', e => {
			e.preventDefault();
			Favoris.toggleFavoris(this.game, button);
		});
	}
}
