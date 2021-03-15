import Component from '../components/Component';
import Img from './Img';

export default class Person extends Component {
	constructor({ name, background_image }, nom, prenom, surnom) {
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
						value: '',
					},
					[
						new Component(
							'div',
							{
								name: 'class',
								value:
									'card-image waves-effect waves-block waves-light games-image',
							},
							[
								new Img(
									`https://media.rawg.io/media/crop/600/400${
										background_image.split('media')[2]
									}`
								),
							]
						),
						new Component(
							'span',
							{
								name: 'class',
								value: '',
							},
							[
								new Component('h1', {
									name: 'class',
									value: 'card-title activator grey-text text-darken-4',
								}),
								new Component('h4', null, name),
								new Component('h5', null, prenom + ' ' + nom),
								new Component('p', null, 'Alias : ' + surnom),
								new Component('p', null, 'Note : 33%'),
							]
						),
					]
				),
			]
		);
	}
}
