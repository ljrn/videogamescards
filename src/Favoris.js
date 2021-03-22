// Classe Utilitaire qui permet de gerer les favoris
export default class Favoris {
	static favoris = [];

	// Gère le comportement du bouton favoris associé à un jeu
	static toggleFavoris(game, button) {
		const star = button.querySelector('i');
		if (this.isGameinFav(game)) {
			this.removeFavoris(game);
			star.innerHTML = 'star_border';
		} else {
			this.addFavoris(game);
			star.innerHTML = 'star';
		}
	}

	// Retourne true si le jeu est déjà dans les favoris, false sinon
	static isGameinFav(game) {
		return this.favoris.some(fav => fav.name === game.name);
	}

	// Ajoute le jeu aux favoris
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
		localStorage.setItem('favoris', JSON.stringify(this.favoris));
	}

	// Enlève le jeu des favoris
	static removeFavoris(game) {
		this.favoris = this.favoris.filter(fav => fav.name != game.name);
		localStorage.setItem('favoris', JSON.stringify(this.favoris));
	}

	// Retourne la liste des jeux favoris
	static getFavoris() {
		return this.favoris;
	}

	// Reset la liste des jeux favoris
	static resetFavoris() {
		this.favoris = [];
		localStorage.clear();
	}

	// Importe les favoris depuis une string
	static importFavoris(favoris) {
		this.favoris = JSON.parse(favoris);
	}
}
