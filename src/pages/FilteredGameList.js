import GameList from './GameList';
import Filters from '../Filters';

export default class FilteredGameList extends GameList {
	constructor() {
		super();
	}

	resetPage() {
		super.resetPage();
	}

	getGames() {
		console.log('filtered ' + Filters.toString());
		console.log(Filters.filters);
		//this.resetPage();
		fetch(
			`https://api.rawg.io/api/games?metacritic=50,100&dates=2020,${new Date().getUTCFullYear()}&page=${
				this.page_num
			}
			${Filters.toString()}`
		)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				console.log(this.page_num);
				this.games = responseJSON;
				console.log();
				this.element.innerHTML = this.render();
				this.addFavorites(this.element);
				this.redirectDetails(this.element);
			})
			.catch(error => {
				console.error(error);
			});
	}
}
