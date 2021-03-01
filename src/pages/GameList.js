import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Loader from '../components/Loader';
import Router from '../Router';

export default class GameList extends Page {
	#games;
	static page_num;
	constructor(games) {
		super('gameList');
		this.games = games;
		this.page_num = 1;
		document.onscroll = this.loadMore;
	}

	set games(value) {
		console.log(value);
		this.#games = value;
		if (this.#games.results) {
			this.children = this.#games.results.map(game => new GameThumbnail(game));
		}
	}

	incPageNum() {
		this.page_num += 1;
	}
	decPageNum() {
		this.page_num -= 1;
	}

	loadMore() {
		if (
			document.documentElement.scrollTop + window.innerHeight ==
			document.documentElement.scrollHeight - 500
		) {
			document.documentElement.style.overflow = 'hidden';
			document.documentElement.scrollTop =
				document.documentElement.scrollTop - 2500;
			Router.navigate('/');
		}
	}

	mount(element) {
		console.log(this.page_num);
		super.mount(element);
		this.element.innerHTML += new Loader().render();
		fetch(`https://api.rawg.io/api/games?page=${this.page_num}`)
			.then(response => response.json())
			.then(responseJSON => {
				console.log(responseJSON);
				this.games = responseJSON;
				console.log(this.element);
				if (this.page_num == 1) this.element.innerHTML = this.render();
				else this.element.innerHTML += this.render();

				this.page_num++;
			})
			.then((document.documentElement.style.overflow = ''))
			.catch(error => {
				console.error(error);
			});
	}
}
