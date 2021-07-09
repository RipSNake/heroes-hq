// routes
export const LOGIN_SCREEN = '/login';
export const HOME_SCREEN = '/home';
export const SEARCH_SCREEN = '/search';
export const HERO_SCREEN = '/hero';
export const LOGOUT_SCREEN = '/logout';

// redux slice status
export const IDLE = 'idle';
export const LOADING = 'loading';
export const SUCCEEDED = 'succeeded';
export const FAILED = 'failed';
// null
export const NULL = null;

//http request methods
export const GET = 'get';
export const POST = 'post';
export const PUT = 'put';
export const DELETE = 'delete';
// Superhero API
export const API_URL = `https://superheroapi.com/api.php`;
export const API_TOKEN = '10160265755538455';
// login server
export const LOGIN_URL = 'http://challenge-react.alkemy.org';
// routes
export const POWERSTATS = '/powerstats';
export const BIOGRAPHY = '/biography';
export const APPEARANCE = '/appearance';
export const WORK = '/work';
export const CONNECTIONS = '/connections';
export const IMAGE = '/image';
export const SEARCH = '/search';
// buttons texts
export const ACCEPT_BTN = 'Accept';
export const DELETE_BTN = 'Delete';
export const DETAILS_BTN = 'Details';
export const ADD_BTN = 'Add';
export const BACK_BTN = 'Back';
// HOmeScreen Strings
export const AVG = 'Average';

// Alert's Strings
export const alertErrorStr = {
	title: 'Error',
	text: 'No se pudieron obtener los datos!'
};

export const alertInfoStr = {
	title: 'Alerta',
	text: 'Pudiste loguearte. Serás redirigido al Inicio'
}

export const alertSuccesStr = {
	title: 'Exito',
	text: 'Accion realizada con exito'
}

export const alertConfirmStr = {
	title: 'Estas seguro?',
	text: 'No vas a poder revertir esta accion...',
	confirmBtn: 'Si'
}