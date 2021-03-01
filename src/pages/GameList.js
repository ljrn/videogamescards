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
		this.#games = value;
		this.children = this.#games.map(game => new GameThumbnail(game));
	}

	incPageNum() {
		this.page_num += 1;
	}
	decPageNum() {
		this.page_num -= 1;
	}

	mount(element) {
		super.mount(element);
		fetch(`http://api.rawg.io/api/games?page=${this.page_num}`)
			.then(response => response.json())
			.then(responseJSON => {
				this.game = responseJSON;
				this.element.innerHTML = this.render();
			});
	}
}
