import Component from './Component.js';
export default class Badge extends Component {
	constructor(text, caption) {
		super(
			'span',
			[
				{ name: 'class', value: 'new badge black' },
				{ name: 'data-badge-caption', value: caption },
			],
			text
		);
	}
}
