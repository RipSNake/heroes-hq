import './index.css';
import { useState, useEffect } from 'react';
import { useSelection, dispatch } from '@reduxjs/toolkit';
// components
import Loader from './../Loader';
import HeroCard from './../HeroCard';

import myTeam from './myTeam';

export const HeroesList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		if(data.length === 0) {
			setData(myTeam);
		}
	}, [data]);

	return (
		<div className="col justify-content-center">
			{ data.length === 0 ?
				<Loader />
				:
				<>
					
						<h1 className="col-12 my-5">My Actual Team</h1>
						<div className="row">
						{ data.map((hero) => {
							return(
								<div className="col-12 col-sm-6 col-md-4" key={hero.id}>
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
