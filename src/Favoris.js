import GameThumbnail from './components/GameThumbnail';

export default class Favoris {
	static favoris = [];

	static addFavoris(game) {
		this.favoris.push(game);
		localStorage.setItem('favoris', JSON.stringify(this.favoris));
	}

	static getFavoris() {
		return this.favoris;
	}

	static resetFavoris() {
		this.favoris = [];
	}

	static setFavoris(favoris) {
		this.favoris = favoris;
	}
}
