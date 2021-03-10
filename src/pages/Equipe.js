import Person from '../components/Person';
import Page from '../pages/Page';
import Component from '../components/Component';

export default class Equipe extends Page {
	louis;
	martin;
	baptiste;

	constructor() {
		super();
		/*this.louis = new Person(
			'Jeronimo',
			'Louis',
			'le boss',
			'Fifa 21',
			'33',
			'fifa-21'
		);

		this.martin = new Person(
			'Thibaut',
			'Martin',
			'Wili le roi',
			'League of Legends',
			'33',
			'league-of-legends'
		);

		this.baptiste = new Person(
			'Momut',
			'Baptiste',
			'le boss too',
			'CS-GO',
			'33',
			'counter-strike-global-offensive'
		);*/
	}

	mount(element) {
		super.mount(element);
		this.children = [this.louis, this.martin, this.baptiste];
		this.tagName = 'div';
		this.attribute = null;
		this.element.innerHTML = this.render();
		this.searchJeu();
	}

	searchJeu() {
		fetch('https://api.rawg.io/api/games/fifa-21')
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.louis = new Person(responseJSON, 'Jeronimo', 'Louis', 'le boss');
				this.children.push(this.louis);
				this.element.innerHTML = this.render();
			})
			.catch(error => {
				console.error(error);
			});

		fetch('https://api.rawg.io/api/games/counter-strike-global-offensive')
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

		fetch('https://api.rawg.io/api/games/league-of-legends')
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
				this.element.innerHTML = this.render();
			})
			.catch(error => {
				console.error(error);
			});
	}
}
