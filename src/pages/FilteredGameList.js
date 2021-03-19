import GameList from './GameList';
import Filters from '../Filters';

export default class FilteredGameList extends GameList {
	constructor() {
		super();
	}

	getGames() {
		fetch(
			`https://api.rawg.io/api/games?key=6b30690e274446c997ad25f8f19e1215&metacritic=50,100&dates=2020,${
				new Date().getUTCFullYear() + 1
			}&page=${this.page_num}
			${Filters.toString()}`
		)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.games = responseJSON;
				this.element.innerHTML = this.render();
				this.addFavorites(this.element);
				this.redirectDetails(this.element);
			})
			.catch(error => {
				console.error(error);
			});
	}
}
