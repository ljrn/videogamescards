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
	}) {
		let color;
		if (metacritic > 66) color = 'green';
		else if (metacritic > 33 && metacritic < 66) color = 'orange';
		else color = 'orange';

		parent_platforms = parent_platforms.map(
			plat => new PlatformImg(plat.platform.name)
		);

		super('div', { name: 'class', value: 'card gameThumbnail' }, [
			new Component(
				'div',
				{
					name: 'class',
					value: 'card-image waves-effect waves-block waves-light games-image',
				},
				[new Img(background_image)]
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
		]);
	}
}
