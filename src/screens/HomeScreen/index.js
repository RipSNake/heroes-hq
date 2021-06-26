import { useState, useEffect } from 'react';
//components
import Loader from './../../components/Loader';
// constants
// import { IDLE } from './../../constants';
// redux
// import { useSelection, dispatch } from '@reduxjs/toolkit';
import apiService from './../../services/apiService';

export const HomeScreen = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log('Call Heroes\'s API');
		apiService({method: 'get', id: 1})
		setList(['hello']);
	}, []);

	return (
		<>
		{ !(list.length > 0) ?
			<>
				<Loader />
			</>
			:
			<>
				<h1>Heroes's List</h1>
			</>	
		}
		</>
	)
};

export default HomeScreen;