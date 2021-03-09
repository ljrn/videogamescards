export default class Filters {
	static filters = [];

	static addFilter(nom, valeur) {
		const filter = { name: nom, value: valeur };
		if (this.filters.find(f => f.name === filter.name))
			this.filters.find(f => f.name === filter.name).value = filter.value;
		else this.filters.push(filter);
	}

	static resetFilters() {
		this.filters = [];
	}

	static resetSearch() {
		this.filters = this.filters.filter(f => f.name != 'search');
	}

	static toString() {
		let string = '';
		this.filters.forEach(filter => {
			if (filter.value) string += `&${filter.name}=${filter.value}`;
		});
		return string;
	}
}
