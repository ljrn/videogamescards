import Component from './Component.js';
import Img from './Img.js';
export default class SliderCarousel extends Component {
	items;
	constructor(images) {
		super();
		if (images.length == 0)
			images = [{ image: '/images/no_image_available.jpg' }];

		this.items = images.map(
			img =>
				`<a class='carousel-item' href='${img.image}'>
					 <img src='${img.image}'>
				</a>	 
				`
		);
	}

	render() {
		return `<div class='carousel carousel-slider'>
					${this.items.join('')}
				</div>`;
	}
}
