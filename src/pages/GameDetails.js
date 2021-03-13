import Page from './Page';
import Loader from '../components/Loader';
import Component from '../components/Component';
import PlatformImg from '../components/PlatformImg';
import Img from '../components/Img';
import SliderCarousel from '../components/SliderCarousel';
import FloatingFavButton from '../components/FloatingFavButton';
import Favoris from '../Favoris.js';

export default class GameDetails extends Page {
	chemin;
	game;
	constructor(chemin) {
		super('detail');
		this.chemin = chemin;
	}

	getInfos() {
		const promise1 = fetch(`https://api.rawg.io/api/games/${this.chemin}`)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.game = responseJSON;
				const parent_platforms = responseJSON.parent_platforms.map(
					plat => new PlatformImg(plat.platform.name)
				);
				const name = new Component(
					'h1',
					{
						name: 'class',
						value: '',
					},
					`${responseJSON.name}`
				);
				const background = new Img(
					`https://media.rawg.io/media/crop/600/400${
						responseJSON.background_image.split('media')[2]
					}`
				);
				const platform = new Component(
					'div',
					{ name: 'class', value: 'card-action' },
					parent_platforms
				);
				const released = new Component(
					'h2',
					{
						name: 'class',
						value: '',
					},
					`Released: ${responseJSON.released}`
				);
				const metacritic = new Component(
					'h3',
					{
						name: 'class',
						value: '',
					},
					`Note Metacritic: ${responseJSON.metacritic}`
				);
				const description = new Component(
					'p',
					null,
					`${responseJSON.description}`
				);
				const floatB = new FloatingFavButton(responseJSON.name);
				this.children.unshift(
					name,
					background,
					platform,
					released,
					metacritic,
					description,
					floatB
				);
			})
			.catch(error => {
				console.error(error);
			});

		const promise2 = fetch(
			`https://api.rawg.io/api/games/${this.chemin}/screenshots?page_size=30`
		)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				console.log(new Img(`${responseJSON.results[0].image}`));
				/*const img = responseJSON.results.map(
						res =>
							new Component(
								'a',
								{
									name: 'href',
									value: `${res.image}`,
								},
								[
									new Img(
										`https://media.rawg.io/media/crop/600/400/screenshots${
											res.image.split('screenshots')[1]
										}`
									),
								]
							)
					);
					const slider = new Component(
						'div',
						{ name: 'class', value: 'screenshots' },
						img
					);*/

				const slider = new SliderCarousel(responseJSON.results);
				this.children.push(slider);
			})
			.catch(error => {
				console.error(error);
			});

		// Attend la fin de toutes les promesses avant de render
		Promise.all([promise1, promise2]).then(values => {
			console.log(this.children);
			this.element.innerHTML = this.render();
			const elems = this.element.querySelectorAll('.carousel');
			const instances = M.Carousel.init(elems, {
				fullWidth: true,
				indicators: true,
			});
			this.handleAddFavorites();
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
			console.log('fav');
			e.preventDefault();
			Favoris.toggleFavoris(this.game, button);
		});
	}
}
