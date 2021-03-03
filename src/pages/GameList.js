import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Loader from '../components/Loader';
import Router from '../Router';

export default class GameList extends Page {
	#games;
	page_num;
	rendered;
	constructor(games) {
		super('gameList');
		this.games = games;
		this.page_num = 1;
		this.rendered = [];
		document.onscroll = this.loadMore;
	}

	set games(value) {
		this.#games = value.results;
		if (this.#games) {
			if (this.children instanceof Array)
				this.#games.map(game => this.children.push(new GameThumbnail(game)));
			else this.children = this.#games.map(game => new GameThumbnail(game));
		}
	}

	loadGames() {}

	loadMore() {
		if (
			document.documentElement.scrollTop + window.innerHeight ==
			document.documentElement.scrollHeight
		) {
			document.documentElement.scrollTop =
				document.documentElement.scrollTop - 50;
			Router.append('/');
		}
	}

	mount(element) {
		if (!this.rendered.includes(this.page_num)) {
			this.rendered.push(this.page_num);
			super.mount(element);
			this.element.innerHTML += new Loader().render();
			fetch(`https://api.rawg.io/api/games?page=${this.page_num}`)
				.then(response => response.json())
				.then(responseJSON => {
					console.log(this.page_num);
					this.games = responseJSON;
					console.log();
					this.element.innerHTML = this.render();

					this.page_num++;
				})
				.catch(error => {
					console.error(error);
				});
		}
	}
}
