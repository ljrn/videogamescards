import Component from '../components/Component';
import Img from './Img';

export default class Person extends Component {
	constructor(nom, prenom, surnom, jeu_fav, pourcentage, url) {
		super(
			'div',
			{
				name: 'class',
				value: 'card gameThumbnail',
			},
			[
				new Component(
					'div',
					{
						name: 'class',
						value: 'card-content',
					},
					[
						new Component(
							'div',
							{
								name: 'class',
								value:
									'card-image waves-effect waves-block waves-light games-image',
							},
							[new Img(url)]
						),
						new Component(
							'span',
							{
								name: 'class',
								value: 'card-title activator grey-text text-darken-4',
							},
							[
								new Component('h1', {
									name: 'class',
									value: 'card-action',
								}),
								new Component('h3', null, jeu_fav),
								new Component('h5', null, prenom + ' ' + nom),
								new Component('p', null, 'Alias : ' + surnom),
								new Component('p', null, pourcentage + '%'),
							]
						),
					]
				),
				/*new Component(
					'h1',
					{
						name: 'class',
						value: 'card-content',
					},
					jeu_fav
				),
				new Component(
					'h1',
					{
						name: 'class',
						value: 'card-content',
					},
					nom
				),
				new Component(
					'h1',
					{
						name: 'class',
						value: 'card-title activator grey-text text-darken-4',
					},
					prenom
				),
				new Component(
					'h1',
					{
						name: 'class',
						value: 'card-title activator grey-text text-darken-4',
					},
					surnom
				),
				new Component(
					'h1',
					{
						name: 'class',
						value: 'card-title activator grey-text text-darken-4',
					},
					pourcentage
				),*/
			]
		);
	}
}
