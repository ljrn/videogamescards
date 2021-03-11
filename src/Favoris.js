export default class Favoris {
	static favoris = [];

	static toggleFavoris(game, button) {
		const star = button.querySelector('i');
		console.log(star);
		if (this.isGameinFav(game)) {
			this.removeFavoris(game);
			star.innerHTML = 'star_border';
		} else {
			this.addFavoris(game);
			star.innerHTML = 'star';
		}
	}

	static isGameinFav(game) {
		return this.favoris.some(fav => fav.name === game.name);
	}

	static addFavoris(game) {
		this.favoris.push({
			name: game.name,
			background_image: game.background_image,
			released: game.released,
			metacritic: game.metacritic,
			parent_platforms: game.parent_platforms,
			id: game.id,
			slug: game.slug,
		});
		console.log(this.favoris);
		localStorage.setItem('favoris', JSON.stringify(this.favoris));
	}

	static removeFavoris(game) {
		this.favoris = this.favoris.filter(fav => fav.name != game.name);
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
