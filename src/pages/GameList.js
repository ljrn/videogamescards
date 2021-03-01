import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';

export default class GameList extends Page {
	#games;
	page_num;
	constructor(games) {
		super('gameList'); // on pase juste la classe CSS souhaitée
		this.games = games;
		this.page_num = 1;
	}

	set games(value) {
		console.log(value);
		this.#games = value;
		if (this.#games.results) {
			this.children = this.#games.results.map(
				game =>
					new GameThumbnail({
						name: game.name,
						background_image: game.background_image,
						released: game.released,
						metacritic: game.metacritic,
					})
			);
		}
	}

	incPageNum() {
		this.page_num += 1;
	}
	decPageNum() {
		this.page_num -= 1;
	}

	mount(element) {
		super.mount(element);
		fetch(`https://api.rawg.io/api/games?page=${this.page_num}`)
			.then(response => response.json())
			.then(responseJSON => {
				console.log(responseJSON);
				this.games = responseJSON;
				console.log(this.element);
				this.element.innerHTML = this.render();
			})
			.catch(error => {
				console.error(error);
			});
	}
}
