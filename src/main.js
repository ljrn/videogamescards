import GameThumbnail from './components/GameThumbnail';

const body = document.querySelector('body');

body.innerHTML += new GameThumbnail({
	name: 'Grand Theft Auto V',
	background_image:
		'https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg',
	released: '2013-09-17',
	metacritic: '97',
}).render();
