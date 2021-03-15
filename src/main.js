import GameList from './pages/GameList';
import Router from './Router.js';
import Filters from './Filters';
import FilteredGameList from './pages/FilteredGameList';
import Favorites from './pages/Favorites';
import Favoris from './Favoris';
import Equipe from './pages/Equipe';

jQuery(function () {
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#scrollUp').css('right', '10px');
			} else {
				$('#scrollUp').removeAttr('style');
			}
		});
	});
});
if (localStorage.getItem('favoris')) {
	Favoris.setFavoris(JSON.parse(localStorage.getItem('favoris')));
}

if (localStorage.getItem('filters')) {
	Filters.importFilters(localStorage.getItem('filters'));
}
//Filters.addFilter('search', localStorage.getItem('search'));

const gameList = new GameList();
const searchList = new FilteredGameList();
const favorisList = new Favorites();
const equipeList = new Equipe();

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.page');
Router.menuElement = document.querySelector('.menu');
Router.routes = [
	{ path: '/', page: searchList, title: 'Jeux' },
	{ path: '/lequipe.fr', page: equipeList, title: 'Equipe' },
	{ path: '/mes-favoris', page: favorisList, title: 'Favoris' },
];

window.onpopstate = () => Router.navigate(document.location.pathname, false);
window.onpopstate();

const form = document.querySelector('form');

form.addEventListener('submit', e => {
	e.preventDefault();
	Filters.addFilter(form.search.id, form.search.value);
	localStorage.setItem('search', form.search.value);
	searchList.resetPage();
	Router.changePage('/', searchList);
});

const ordering = document.querySelector('#ordering');

ordering.addEventListener('change', e => {
	e.preventDefault();
	Filters.addFilter(ordering.id, ordering.value);
	console.log(Filters.filters);
	searchList.resetPage();
	Router.changePage('/', searchList);
});

const genres = document.querySelector('#genres');

genres.addEventListener('change', e => {
	e.preventDefault();
	Filters.addFilter(genres.id, genres.value);
	console.log(Filters.filters);
	searchList.resetPage();
	Router.changePage('/', searchList);
});

Array.from(ordering.options).forEach(option => {
	if (option.value == Filters.getOrdering()) option.selected = true;
});

Array.from(genres.options).forEach(option => {
	if (option.value == Filters.getGenre()) option.selected = true;
});
