import Filters from './Filters';
import GameList from './pages/GameList';
import GameDetails from './pages/GameDetails';

export default class Router {
	static titleElement;
	static contentElement;
	static #menuElement;

	static set menuElement(element) {
		this.#menuElement = element;
		const links = element.querySelectorAll('a');
		links.forEach(link => link.addEventListener('click', this.handleMenuClick));
		const searchCancel = element.querySelector('#close');
		searchCancel.addEventListener('click', this.handleCancelSearch);
	}

	static handleMenuClick = event => {
		event.preventDefault();
		if (event.target.getAttribute('id') === 'reset') {
			Filters.resetFilters();
			this.changePage('/', new GameList());
		} else this.navigate(event.target.getAttribute('href'));
	};

	static handleCancelSearch = event => {
		event.preventDefault();
		Filters.resetSearch();
		this.#menuElement.querySelector('#search').value = '';
	};

	static navigate(path, pushState = true) {
		if (path.includes('/detail-')) {
			const gameDetails = new GameDetails(path.split('/detail-')[1]);
			this.routes.push({
				path: `/detail-${path.split('/detail-')[1]}`,
				page: gameDetails,
				title: 'Details',
			});
		}
		const route = this.routes.find(route => route.path === path);
		const filterBox = this.#menuElement.querySelector('.filters');
		if (route) {
			route.page.resetPage();
			if (route.path === '/') filterBox.hidden = false;
			else filterBox.hidden = true;
			this.titleElement.innerHTML = `<h1>${route.title}</h1>`;
			this.contentElement.innerHTML = route.page.render();
			route.page.mount?.(this.contentElement);
			if (pushState) {
				window.history.pushState(null, null, path);
			}
		}
	}

	static append(path) {
		const route = this.routes.find(route => route.path === path);
		this.contentElement.innerHTML = route.page.render();
		route.page.mount?.(this.contentElement);
	}

	static changePage(path, page) {
		const route = this.routes.find(route => route.path === path);
		route.page = page;
		this.navigate(path);
	}
}
