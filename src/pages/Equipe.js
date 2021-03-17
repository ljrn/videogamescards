import Loader from '../components/Loader';
import Person from '../components/Person';
import Page from '../pages/Page';

export default class Equipe extends Page {
	louis;
	martin;
	baptiste;

	constructor() {
		super('gameList');
	}

	render() {
		return `<section class='gameList'>
					${this.martin}
					${this.louis}
					${this.baptiste}
				</section>`;
	}

	mount(element) {
		super.mount(element);
		this.searchJeu();
	}

	searchJeu() {
		this.element.innerHTML = new Loader().render();
		const promise1 = fetch('https://api.rawg.io/api/games/fifa-21')
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.louis = new Person(
					responseJSON,
					'Jeronimo',
					'Louis',
					'Le Boss'
				).render();
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
					'Le Boss Too'
				).render();
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
					'Wili Le Roi'
				).render();
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
