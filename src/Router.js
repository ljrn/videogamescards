export default class Router {
	static titleElement;
	static contentElement;
	static #menuElement;

	static routes = [];
	static set menuElement(element) {
		this.#menuElement = element;
	}

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
}
