import Component from './Component.js';
import Img from './Img.js';
export default class SliderCarousel extends Component {
	constructor(images) {
		const imgMap = images.map(
			img =>
				new Component(
					'a',
					[
						{ name: 'class', value: 'carousel-item' },
						{ name: 'href', value: `${img.image}` },
					],
					[new Img(`${img.image}`)]
				)
		);
		super('div', { name: 'class', value: 'carousel carousel-slider' }, imgMap);
	}
}
