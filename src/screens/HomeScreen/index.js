import { useState, useEffect } from 'react';
//	components
import HeroesList from './../../components/HeroesList';
import StatCard from './../../components/StatCard';
// team members
import { useSelector } from 'react-redux';
// controller
import { teamPowerStats } from './../../controllers/heroesController';
// constants for strings
import { AVG } from './../../constants';

const biggerStat = (stats) => {
	let bigger = '';
	for(let s in stats) {
		if(stats[s] > bigger) {
			bigger = stats;
		}
	}
	return bigger;
}

export const HomeScreen = () => {	
	const [stats, setStats] = useState({power: 80});	
	const [avgLook, setAvgLook] = useState({height: 0, weight: 0});

	const myTeam = useSelector(state => state.hero.heroes);

	useEffect( () => {
		const {totalPS, avgPhysicals} = teamPowerStats(myTeam);
		setStats(totalPS);
		setAvgLook(avgPhysicals);
		biggerStat(stats);
	}, [myTeam]);
	
	return (
		<>
		<h1 className="col-12 my-4 team-title">Active Team</h1>
		 <div className="container-fluid mx-auto row">
		{ Object.keys(stats).map( (key, index) => {
		 			return (
		 				<StatCard stat={{name: key, value: stats[key]}} key={key}/>
		 			)
		 		})
		 	}
		</div>
		<div className="container-fluid row my-4">*/}
			{ Object.keys(avgLook).map( (key, index) => {
				return (
					<>
						<h3 key={index} className="col" id={key}>{AVG} {key}: <span>{avgLook[key][0]} {avgLook[key][1]}</span></h3>
					</>
				)
			})}
		</div>
			<HeroesList />
		</>
	)
};

export default HomeScreen;