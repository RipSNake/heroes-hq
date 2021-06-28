import { useState, useEffect } from 'react';
import { searchHero, addHero } from './../../controllers/heroesController';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_BTN } from './../../constants';

const imgStyle = {'minHeight':'350px', background: 'url("https://www.androfast.com/wp-content/uploads/2018/01/placeholder.png")', backgroundPosition: 'center'};

export const HeroSearch = () => {
	const [results, setResults] = useState([]);
	
	const dispatch = useDispatch();

	useEffect(() => {
		//fetch results
	}, [results]);

	return (
		<div className="my-4 h-100">
			<input type="text" className="alkemy-form-control w-25 text-center d-inline" id="search-text" placeholder="Enter Heroes Name" />
			<button className="alkemy-btn-primary" onClick={(event) => searchHero(event, setResults)}><i className="bi bi-search"></i></button>
			{
			 results.length > 0 
			 ? 
			 <div className="container-fluid row">
				{results.map( (hero) =>
					<div key={hero.id} className="col-12 col-sm-6 col-md-4 my-4 mx-auto"> 
						<div className="alkemy-card" style={{'borderRadius':'10px', 'overflow':'hidden'}}>
				     	<img className="card-img-top" src={hero.image.url} alt={`${hero.name}`} title={`${hero.name}`} style={imgStyle}/>
				     	<div className="card-body">
			         	<h5 className="card-title">{hero.name}</h5>
			         	
			         	<button className="alkemy-btn-primary" onClick={() => addHero(hero, dispatch)}>{ADD_BTN}</button>
				     </div>
					 	</div>
				 	</div>
				)}
			</div>
			:
			<div className="d-flex justify-content-center align-items-center mt-5" style={{'minHeight':'50vh'}}>
				<h4>Please, perform a search to see any results</h4>
			</div>
			}
		</div>
	)
};

export default HeroSearch;