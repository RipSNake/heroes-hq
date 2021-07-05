import apiService from './../services/apiService';
import { alertError, alertSuccess, alertInfo, alertConfirm } from './../components/Alerts';
import { addHero as addMember, deleteHero } from './../features/heroSlice';

export const getHero = async(id) => {
	return await apiService({id});
};

export const searchHero = async(searchParams, setResults) => {	
	
	const results = await apiService({searchParams});

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

export const teamPowerStats = (team) => {
	const totalPS = {};
	const avgPhysicals = {height: [0,0], weight: [0,0]};

	for(const member of team) {
		
		// foot and pounds
		avgPhysicals.height[0] += parseInt(member.appearance.height[0].substring( member.appearance.height[0].length - 1, 0));
		avgPhysicals.weight[0] += parseInt(member.appearance.weight[0].substring( member.appearance.weight[0].length - 2, 0));
		// cm and kg
		avgPhysicals.height[1] += parseInt(member.appearance.height[1].substring( member.appearance.height[1].length - 2, 0));
		avgPhysicals.weight[1] += parseInt(member.appearance.weight[1].substring( member.appearance.weight[1].length - 2, 0));

		for(const ps in member['powerstats']) {
			// avoid null values			
			if(member.powerstats[ps] !== null) {
				// initialize properties
				if(totalPS[ps] === undefined) { totalPS[ps] = 0 };
				// sum member stat
				totalPS[ps] += parseInt(member.powerstats[ps]);
			}
		}
	}
	
	avgPhysicals.height[0] /= team.length;
	avgPhysicals.height[1] /= team.length;
	avgPhysicals.weight[0] /= team.length;
	avgPhysicals.weight[1] /= team.length;



	return {totalPS, avgPhysicals};
}