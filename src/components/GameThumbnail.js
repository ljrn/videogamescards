import Component from './Component.js';
import Img from './Img';
import PlatformImg from './PlatformImg';

export default class GameThumbnail extends Component {
	constructor({
		name,
		background_image,
		released,
		metacritic,
		parent_platforms,
		id,
		slug,
	}) {
		parent_platforms = parent_platforms.map(
			plat => new PlatformImg(plat.platform.name)
		);

		//Permet un chargement nettement plus rapide
		const background_image_cropped = `https://media.rawg.io/media/crop/600/400${
			background_image.split('media')[2]
		}`;

		super(
			'div',
			[
				{ name: 'class', value: 'card gameThumbnail' },
				{ name: 'id', value: `${slug}` },
			],
			[
				new Component(
					'div',
					{
						name: 'class',
						value:
							'card-image waves-effect waves-block waves-light games-image',
					},
					[
						new Component(
							'a',
							{
								name: 'class',
								value:
									'btn-floating halfway-fab waves-effect waves-light black favbutton',
							},
							[
								new Component(
									'i',
									{ name: 'class', value: 'material-icons' },
									'star_border'
								),
							]
						),
						new Img(background_image_cropped),
					]
				),

				new Component(
					'div',
					{
						name: 'class',
						value: 'card-content',
					},
					[
						new Component(
							'span',

							{
								name: 'class',
								value: 'card-title activator grey-text text-darken-4',
							},
							[
								new Component('h4', null, name),
								new Component('p', null, `Date de sortie: ${released}`),
								new Component('p', null, `Note Metacritic: ${metacritic}`),
							]
						),
					]
				),
				new Component(
					'div',
					{
						name: 'class',
						value: 'card-action',
					},
					parent_platforms
				),
			]
		);
	}
}
