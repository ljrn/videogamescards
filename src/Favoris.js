import GameThumbnail from './components/GameThumbnail';

export default class Favoris {
	static favoris = [];

	static addFavoris(game) {
		this.favoris.push({
			name: game.name,
			background_image: game.background_image,
			released: game.released,
			metacritic: game.metacritic,
			parent_platforms: game.parent_platforms,
			id: game.id,
		});
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
