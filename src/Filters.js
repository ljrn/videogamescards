export default class Filters {
	static filters = [];

	static addFilter(nom, valeur) {
		const filter = { name: nom, value: valeur };
		if (this.filters.find(f => f.name === filter.name))
			this.filters.find(f => f.name === filter.name).value = filter.value;
		else this.filters.push(filter);
		localStorage.setItem('filters', this.exportFilters());
	}

	static resetFilters() {
		this.filters = [];
		localStorage.setItem('filters', this.exportFilters());
	}

	static resetSearch() {
		this.filters = this.filters.filter(f => f.name != 'search');
	}

	static importFilters(filters) {
		this.filters = JSON.parse(filters);
	}

	static exportFilters() {
		return JSON.stringify(this.filters);
	}

	static toString() {
		let string = '';
		this.filters.forEach(filter => {
			if (filter.value) string += `&${filter.name}=${filter.value}`;
		});
		return string;
	}

	static getOrdering() {
		const ordering = this.filters.find(f => 'ordering' === f.name);
		if (ordering) return ordering.value;
		else return '';
	}

	static getGenre() {
		const genre = this.filters.find?.(f => 'genres' === f.name);
		if (genre) return genre.value;
		else return '';
	}
}
