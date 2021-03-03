import Component from './Component.js';
export default class PlatformImg extends Component {
	constructor(platform) {
		super('img', [
			{ name: 'src', value: `/images/${platform}.png` },
			{ name: 'class', value: 'platform-img' },
		]);
	}
}
