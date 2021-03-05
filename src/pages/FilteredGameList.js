import GameList from './GameList';
import Filters from '../Filters';

export default class FilteredGameList extends GameList {
	constructor() {
		document.onscroll = null;
		super();
	}

	resetPage() {
		super.resetPage();
	}

	getGames() {
		document.onscroll = null;
		this.resetPage();
		console.log('filtered ' + Filters.toString());
		console.log(Filters.filters);
		//this.resetPage();
		fetch(
			`https://api.rawg.io/api/games?metacritic=50,100&dates=2020,${new Date().getUTCFullYear()}
			${Filters.toString()}`
		)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				console.log(this.page_num);
				super.games = responseJSON;
				console.log();
				this.element.innerHTML = this.render();
			})
			.catch(error => {
				console.error(error);
			});
	}
}
