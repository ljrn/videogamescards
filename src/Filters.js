// Classe Utilitaire qui permet de gerer les filtres
export default class Filters {
	static filters = [];

	// Ajoute un filtre ou remplace sa valeur si il existe déjà
	static addFilter(nom, valeur) {
		const filter = { name: nom, value: valeur };
		if (this.filters.find(f => f.name === filter.name))
			this.filters.find(f => f.name === filter.name).value = filter.value;
		else this.filters.push(filter);
		localStorage.setItem('filters', this.exportFilters());
	}

	// Reset la liste des filtres
	static resetFilters() {
		this.filters = [];
		localStorage.setItem('filters', this.exportFilters());
	}

	// Reset le filtre de recherche
	static resetSearch() {
		this.filters = this.filters.filter(f => f.name != 'search');
		localStorage.setItem('filters', this.exportFilters());
	}

	// Importe les filtres depuis une string
	static importFilters(filters) {
		this.filters = JSON.parse(filters);
	}

	// Exporte les filtres en string
	static exportFilters() {
		return JSON.stringify(this.filters);
	}

	// Retourne les filtres sous forme 'filtre1=value1&filtre2=value2....' (utile pour l'utiliser dans une query string)
	static toString() {
		let string = '';
		this.filters.forEach(filter => {
			if (filter.value) string += `&${filter.name}=${filter.value}`;
		});
		return string;
	}

	// Retourne la valeur du filtre de tri ou ''
	static getOrdering() {
		const ordering = this.filters.find(f => 'ordering' === f.name);
		if (ordering) return ordering.value;
		else return '';
	}

	// Retourne la valeur du filtre par genre ou ''
	static getGenre() {
		const genre = this.filters.find?.(f => 'genres' === f.name);
		if (genre) return genre.value;
		else return '';
	}
}
