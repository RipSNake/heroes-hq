import { useState, useEffect } from 'react';
//	components
import HeroesList from './../../components/HeroesList';
// http service
import apiService from './../../services/apiService';

export const HomeScreen = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log('Call Heroes\'s API');
	}, [list]);

	return (
		<>
			<HeroesList />
		</>
	)
};

export default HomeScreen;