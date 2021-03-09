import Person from '../components/Person';
import Page from '../pages/Page';
import Component from '../components/Component';

export default class Equipe extends Page {
	louis;
	martin;
	baptiste;

	constructor(chemin) {
		super();
		this.chemin = chemin;

		this.louis = new Person('Jeronimo', 'Louis', 'le boss', 'Fifa 21', '0', '');
		this.martin = new Person(
			'Thibaut',
			'Martin',
			'Wili le roi',
			'League of Legends',
			'0',
			''
		);
		this.baptiste = new Person(
			'Momut',
			'Baptiste',
			'le boss too',
			'CS-GO',
			'0',
			''
		);
	}

	mount(element) {
		console.log(this);
		super.mount(element);
		console.log(this.martin);
		this.children = [this.louis, this.martin, this.baptiste];
		this.tagName = 'div';
		this.attribute = null;
		this.element.innerHTML = this.render();
		//this.setImgJeuFav();
	}

	/*setImgJeuFav() {
		fetch(`https://api.rawg.io/api/games/${this.chemin}`)
			.then(response => {
				if (response.status == 200) return response.json();
				else throw new Error(`Fetch error: ${response.status}`);
			})
			.then(responseJSON => {
				this.element.innerHTML = this.render();
			})
			.catch(error => {
				console.error(error);
			});
	}*/
}
