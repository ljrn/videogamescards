import GameThumbnail from './components/GameThumbnail';
import GameList from './pages/GameList';
import Router from './Router.js';
import Filters from './Filters';
import FilteredGameList from './pages/FilteredGameList';
import Favorites from './pages/Favorites';
import Favoris from './Favoris';

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
if (localStorage.getItem('favoris')) {
	Favoris.setFavoris(JSON.parse(localStorage.getItem('favoris')));
}
Filters.addFilter('search', localStorage.getItem('search'));

const gameList = new GameList();
const searchList = new FilteredGameList();
const favorisList = new Favorites();
Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.page');
Router.routes = [
	{ path: '/', page: gameList, title: 'Jeux' },
	{ path: '/search', page: searchList, title: 'Recherche' },
	{ path: '/favoris', page: favorisList, title: 'Favoris' },
];
//Router.navigate('/');
// E.3. Deeplinking
// détection des boutons précédent/suivant du navigateur :
// on lit l'url courante dans la barre d'adresse et on l'envoie au Router
window.onpopstate = () => Router.navigate(document.location.pathname, false);
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();

const form = document.querySelector('form');

form.addEventListener('submit', e => {
	e.preventDefault();
	Filters.addFilter(form.search.id, form.search.value);
	localStorage.setItem('search', form.search.value);
	Router.navigate('/search');
});
