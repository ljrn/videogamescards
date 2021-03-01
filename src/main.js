import GameThumbnail from './components/GameThumbnail';
import GameList from './pages/GameList';
import Router from './Router.js';

const games = document.querySelector('.games');
/*
games.innerHTML += new GameThumbnail({
	name: 'Grand Theft Auto V',
	background_image:
		'https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg',
	released: '2013-09-17',
	metacritic: '97',
}).render();

games.innerHTML += new GameThumbnail({
	name: 'Rocket League',
	background_image:
		'https://media.rawg.io/media/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg',
	released: '2019-09-17T03:06:45',
	metacritic: '97',
}).render();*/
const gameList = new GameList([]);
Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.page');
Router.routes = [{ path: '/', page: gameList, title: 'Jeux' }];
Router.navigate('/');
