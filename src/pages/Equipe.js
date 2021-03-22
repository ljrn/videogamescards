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
		this.initEquipe();
	}

	initEquipe() {
		this.louis = new Person(
			'FIFA 21',
			'https://media.rawg.io/media/games/df4/df415b18835f91a1b4db1da294996ee5.jpg',
			'Jeronimo',
			'Louis',
			'Le Boss'
		).render();

		this.baptiste = new Person(
			'Counter-Strike: Global Offensive',
			'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
			'Momut',
			'Baptiste',
			'Croustibapt'
		).render();

		this.martin = new Person(
			'League of Legends',
			'https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg',
			'Thibaut',
			'Martin',
			'Wili Le Roi'
		).render();

		this.element.innerHTML = this.render();
	}

	/*searchJeu() {
		this.element.innerHTML = new Loader().render();
		const promise1 = fetch(
			'https://api.rawg.io/api/games/fifa-21?key=6b30690e274446c997ad25f8f19e1215'
		)
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
			'https://api.rawg.io/api/games/counter-strike-global-offensive?key=6b30690e274446c997ad25f8f19e1215'
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
					'Croustibapt'
				).render();
			})
			.catch(error => {
				console.error(error);
			});

		const promise3 = fetch(
			'https://api.rawg.io/api/games/league-of-legends?key=6b30690e274446c997ad25f8f19e1215'
		)
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
	}*/
}
