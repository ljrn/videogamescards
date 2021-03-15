import Person from '../components/Person';
import Page from '../pages/Page';
import Component from '../components/Component';

export default class Equipe extends Page {
	louis;
	martin;
	baptiste;

	constructor() {
		super('gameList');
	}

	mount(element) {
		super.mount(element);
		this.searchJeu();
	}

	searchJeu() {
		const promise1 = fetch('https://api.rawg.io/api/games/fifa-21')
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.louis = new Person(responseJSON, 'Jeronimo', 'Louis', 'le boss');
				this.children.push(this.louis);
			})
			.catch(error => {
				console.error(error);
			});

		const promise2 = fetch(
			'https://api.rawg.io/api/games/counter-strike-global-offensive'
		)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.baptiste = new Person(
					responseJSON,
					'Momut',
					'Baptiste',
					'le boss too'
				);
				this.children.push(this.baptiste);
				this.element.innerHTML = this.render();
			})
			.catch(error => {
				console.error(error);
			});

		const promise3 = fetch('https://api.rawg.io/api/games/league-of-legends')
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.martin = new Person(
					responseJSON,
					'Thibaut',
					'Martin',
					'Wili le roi'
				);
				this.children.push(this.martin);
			})
			.catch(error => {
				console.error(error);
			});

		// Attend la fin de toutes les promesses avant de render
		Promise.all([promise1, promise2, promise3]).then(values => {
			this.element.innerHTML = this.render();
		});
	}
}
