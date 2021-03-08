export default class Router {
	static titleElement;
	static contentElement;
	static #menuElement;

	static set menuElement(element) {
		this.#menuElement = element;
		const links = element.querySelectorAll('a');
		links.forEach(link => link.addEventListener('click', this.handleMenuClick));
	}

	static handleMenuClick = event => {
		event.preventDefault();
		this.navigate(event.target.getAttribute('href'));
	};

	static navigate(path, pushState = true) {
		console.log(this.routes);
		const route = this.routes.find(route => route.path === path);
		const filterBox = this.#menuElement.querySelector('.filters');

		if (route) {
			if (route.path === '/' || route.path === '/search')
				filterBox.hidden = false;
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
		this.navigate(route);
	}
}
