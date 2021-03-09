import Person from '../components/Person';
import Page from '../pages/Page';
import Component from '../components/Component';

export default class Equipe extends Page {
	louis;
	martin;
	baptiste;

	constructor() {
		super();
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
	}
}
