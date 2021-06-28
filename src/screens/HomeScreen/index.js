import { useState, useEffect } from 'react';
//	components
import HeroesList from './../../components/HeroesList';
// http service
import apiService from './../../services/apiService';

export const HomeScreen = () => {	

	return (
		<>
			<HeroesList />
		</>
	)
};

export default HomeScreen;