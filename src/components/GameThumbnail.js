import Component from './Component.js';
import Img from './Img';

export default class GameThumbnail extends Component {
	/*constructor({ name, background_image, released, metacritic }) {
		super('div', { name: 'class', value: 'card' }, [
			new Component('a', { name: 'href', value: background_image }, [
				new Img(background_image),
				new Component('section', null, [
					new Component('h4', null, name),
					new Component('ul', null, [
						new Component('li', null, `Date de sortie : ${released} `),
						new Component('li', null, `Note : ${metacritic} `),
					]),
				]),
			]),
		]);
    }*/

	constructor({ name, background_image, released, metacritic }) {
		super('div', { name: 'class', value: 'card gameThumbnail' }, [
			new Component(
				'div',
				{
					name: 'class',
					value: 'card-image waves-effect waves-block waves-light',
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
							new Component('h3', null, name),
							new Component('p', null, `Date de sortie: ${released}`),
							new Component('p', null, `Note Metacritic: ${metacritic}`),
						]
					),
				]
			),
		]);
	}
}
