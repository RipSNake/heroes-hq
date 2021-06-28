import apiService from './../services/apiService';
import { alertError, alertSuccess, alertInfo, alertConfirm } from './../components/Alerts';
import { addHero as addMember, deleteHero } from './../features/heroSlice';

export const getHero = async(id) => {
	await console.log('Get Hero ', id);
};

export const searchHero = async(event, setResults) => {
	const param = document.getElementById('search-text').value;
	const results = await apiService({searchParams: param});

	if(results.error) {
		alertError(results.error.toUpperCase(), 'Error');
	} else {
		setResults(results.results);
	}
}

export const addHero = (hero, dispatch) => {
	dispatch(addMember(hero));
	alertSuccess('Heroe agregado con éxito');
}

export const removeMember = (hero, dispatch) => {
	alertConfirm().then((result) => {
	  if (result.isConfirmed) {
	    dispatch(deleteHero(hero));
			alertInfo('Heroe Elimado');
	  }
	})

	
}