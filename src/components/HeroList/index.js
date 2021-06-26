import { useState, useEffect } from 'react';
import { useSelection, dispatch } from '@reduxjs/toolkit';
import { IDLE } from './../constants';

export const HeroList = () => {
	const [data, setData] = useState([]);


	return (
		<>
			{ data.length === 0 ?
				<Loader />
				:
				<>
					<h2>Heroes List</h2>
					{ data.map((hero) => {
						return(
							<h4>${hero.name}</h4>
						)
					})
					}
				</> 
			}
		</>
	)
}

export default HeroList;

// ●	Nombre del héroe.
// ●	Imagen.
// ●	Powerstats.
// ●	Acciones para ver el detalle o eliminarlo del equipo
