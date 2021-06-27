import { useState, useEffect } from 'react';
import { searchHero, addHero } from './../../controllers/heroesController';
import { ADD_BTN } from './../../constants';

export const HeroSearch = () => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		//fetch results
	}, [results]);

	return (
		<div className="my-4">
		<input type="email" class="alkemy-form-control w-25 text-center d-inline" id="email-example" placeholder="Enter Heroes Name" />
		<button class="alkemy-btn-primary" onClick={searchHero}><i className="bi bi-search"></i></button>
		{
		 results.length > 0 
		 ? 
			results.map( (hero) => {
			<div class="alkemy-card" style={{'borderRadius':'10px', 'overflow':'hidden'}}>
	     	<img class="card-img-top" src="https://www.androfast.com/wp-content/uploads/2018/01/placeholder.png" alt="Imagen de card" />
	     	<div class="card-body">
         	<h5 class="card-title">{hero.name}</h5>
         	
         	<button class="alkemy-btn-primary" onClick={addHero}>{ADD_BTN}</button>
	     </div>
		 	</div>
		})
		:
		<div className="d-flex justify-content-center align-items-center">
			<h1>You need to search first</h1>
		</div>
		}
		</div>
	)
};

export default HeroSearch;