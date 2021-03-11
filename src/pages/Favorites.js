import GameList from './GameList';
import Favoris from '../Favoris';

export default class Favorites extends GameList {
	constructor() {
		super();
	}

	getGames() {
		document.onscroll = null;
		this.games = { results: Favoris.getFavoris() };
		this.element.innerHTML = this.render();
		this.redirectDetails(this.element);
		this.addFavorites(this.element);
	}
}
