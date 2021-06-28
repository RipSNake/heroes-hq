import './index.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import Loader from './../Loader';
import HeroCard from './../HeroCard';

import myTeam from './myTeam';

export const HeroesList = () => {
	const [data, setData] = useState([]);
	
	const myTeam = useSelector(state => state.hero.heroes);

	useEffect(() => {
		setData(myTeam);
	}, [myTeam]);

	return (
		<div className="col justify-content-center">
			{ data.length === 0 ?
				<Loader />
				:
				<>
					
						<h1 className="col-12 my-4 team-title">Active Team</h1>
						<div className="row">
						{ data.map((hero) => {
							return(
								<div key={hero.id} className="col-12 col-sm-6 col-md-4 my-4" >
									<HeroCard hero={hero} />
								</div>
								)
							})
						}
						</div>
					
				</>
			}
		</div>
	)
}

export default HeroesList;
