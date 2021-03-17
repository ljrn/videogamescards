import Component from './Component.js';

export default class ResetFavorisButton extends Component {
	constructor() {
		super();
	}

	render() {
		return `<div class="fixed-action-btn">
					<a class="btn-floating btn-large waves-effect waves-red	black resetFavoris">
						<i class="large material-icons">delete</i>
					</a>
				</div>`;
	}
}
