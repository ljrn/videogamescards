import Component from './Component.js';
export default class PlatformImg extends Component {
	platform;
	constructor(platform) {
		super();
		this.platform = platform;
	}

	render() {
		return `<img src="/images/${this.platform}.png" class="platform-img">`;
	}
}
