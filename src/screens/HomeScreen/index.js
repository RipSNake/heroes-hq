import { useState, useEffect } from 'react';
import Loader from './../../components/Loader';

export const HomeScreen = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		if( heroStatus === IDLE ) {
			console.log('Call the Hero\'s API');
		}
	}, [list]);

	return (
		<>
		<h1>From HomeScreen</h1>
		<Loader />
		</>
	)
};

export default HomeScreen;