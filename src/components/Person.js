import Component from '../components/Component';

export default class Person extends Component {
	constructor(nom, prenom, surnom, jeu_fav, pourcentage) {
		super('div', {}, [
			new Component(
				'h1',
				{
					name: 'class',
					value: '',
				},
				nom
			),
			new Component(
				'h1',
				{
					name: 'class',
					value: '',
				},
				prenom
			),
			new Component(
				'h1',
				{
					name: 'class',
					value: '',
				},
				surnom
			),
			new Component(
				'h1',
				{
					name: 'class',
					value: '',
				},
				jeu_fav
			),
			new Component(
				'h1',
				{
					name: 'class',
					value: '',
				},
				pourcentage
			),
		]);
	}
}
