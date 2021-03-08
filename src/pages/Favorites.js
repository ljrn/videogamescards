import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Loader from '../components/Loader';
import Router from '../Router';
import Filters from '../Filters';
import GameList from './GameList';
import Favoris from '../Favoris';

export default class Favorites extends GameList {
	constructor() {
		super();
	}

	getGames() {
		document.onscroll = null;
		this.resetPage();
		console.log(Favoris.getFavoris());
		Favoris.getFavoris().forEach(element => {
			this.children.push(new GameThumbnail(element));
		});
		this.element.innerHTML = this.render();
	}
}
