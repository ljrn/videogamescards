import Page from './Page';
import Loader from '../components/Loader';
import Component from '../components/Component';
import PlatformImg from '../components/PlatformImg';
import Img from '../components/Img';

export default class GameDetails extends Page {
	chemin;
	constructor(chemin) {
		super('detail');
		this.chemin = chemin;
	}

	getInfos() {
		fetch(`https://api.rawg.io/api/games/${this.chemin}`)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				let parent_platforms = responseJSON.parent_platforms.map(
					plat => new PlatformImg(plat.platform.name)
				);
				let name = new Component(
					'h1',
					{
						name: 'class',
						value: '',
					},
					`${responseJSON.name}`
				);
				let background = new Img(
					`https://media.rawg.io/media/crop/600/400${
						responseJSON.background_image.split('media')[2]
					}`
				);
				let platform = new Component(
					'div',
					{ name: 'class', value: 'card-action' },
					parent_platforms
				);
				let released = new Component(
					'h2',
					{
						name: 'class',
						value: '',
					},
					`Released: ${responseJSON.released}`
				);
				let metacritic = new Component(
					'h3',
					{
						name: 'class',
						value: '',
					},
					`Note Metacritic: ${responseJSON.metacritic}`
				);
				let description = new Component(
					'p',
					null,
					`${responseJSON.description}`
				);
				fetch(
					`https://api.rawg.io/api/games/${this.chemin}/screenshots?page_size=30`
				)
					.then(response => {
						if (response.status == 200) return response.json();
						else throw new Error(`Fetch error: ${response.status}`);
					})
					.then(responseJSON => {
						console.log(new Img(`${responseJSON.results[0].image}`));
						let img = responseJSON.results.map(
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
						let slider = new Component(
							'div',
							{ name: 'class', value: 'screenshots' },
							img
						);
						this.children = [
							name,
							background,
							platform,
							released,
							metacritic,
							description,
							slider,
						];
						this.element.innerHTML = this.render();
					})
					.catch(error => {
						console.error(error);
					});
			})
			.catch(error => {
				console.error(error);
			});
	}
	mount(element) {
		super.mount(element);
		this.element.innerHTML += new Loader().render();
		this.getInfos();
	}
}
