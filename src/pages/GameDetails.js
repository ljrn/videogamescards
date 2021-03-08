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
		console.log(this.chemin);
	}

	getInfos() {
		console.log(this.chemin);
		fetch(`https://api.rawg.io/api/games/${this.chemin}`)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.tagName = 'div';
				this.attribute = this.details;
				let parent_platforms = responseJSON.parent_platforms.map(
					plat => new PlatformImg(plat.platform.name)
				);
				this.children = [
					new Component(
						'h1',
						{
							name: 'class',
							value: '',
						},
						`${responseJSON.name}`
					),
					new Img(
						`https://media.rawg.io/media/crop/600/400${
							responseJSON.background_image.split('media')[2]
						}`
					),
					new Component(
						'div',
						{
							name: 'class',
							value: 'card-action',
						},
						parent_platforms
					),
					new Component(
						'h2',
						{
							name: 'class',
							value: '',
						},
						`Released: ${responseJSON.released}`
					),
					new Component(
						'h3',
						{
							name: 'class',
							value: '',
						},
						`Note Metacritic: ${responseJSON.metacritic}`
					),
					new Component('p', {}, `${responseJSON.description}`),
				];
				this.element.innerHTML = this.render();
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
