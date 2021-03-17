import GameList from './GameList';
import Favoris from '../Favoris';
import ResetFavorisButton from '../components/ResetFavorisButton';
import Router from '../Router';

export default class Favorites extends GameList {
	constructor() {
		super();
	}

	getGames() {
		document.onscroll = null;
		this.games = { results: Favoris.getFavoris() };
		this.children.push(new ResetFavorisButton());
		this.element.innerHTML = this.render();
		this.redirectDetails(this.element);
		this.addFavorites(this.element);

		this.handleResetFavorites();
	}
	handleResetFavorites() {
		const button = this.element.querySelector('.resetFavoris');
		button.addEventListener('click', e => {
			e.preventDefault();
			Favoris.resetFavoris();
			Router.navigate('/mes-favoris');
		});
	}
}
