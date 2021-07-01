import { useState, useEffect } from 'react';
import { searchHero, addHero } from './../../controllers/heroesController';
import { useDispatch } from 'react-redux';
// form schema
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// constants
import { ADD_BTN } from './../../constants';
import {React} from 'react';

const imgStyle = {'minHeight':'350px', maxHeight: '600px', background: 'url("https://www.androfast.com/wp-content/uploads/2018/01/placeholder.png")', backgroundPosition: 'center'};

const searchSchema = Yup.object().shape({'search-text': Yup.string().required()})

export const HeroSearch = () => {
	const [results, setResults] = useState([]);
	const dispatch = useDispatch();
	
	useEffect(() => {
		//fetch results
	}, [results]);

	return (
		<div className="my-4 h-100">
			<Formik 
				initialValues={{'search-text': ''}}
				validationSchema={searchSchema}
				onSubmit={(values) => searchHero(values['search-text'], setResults)}
				>
				
				{ ({errors, touched}) => {

						return (
							<Form>
								<Field type="text" className={`alkemy-form-control w-75 text-center d-inline`} id="search" name="search-text" placeholder="Enter Heroes Name" />
								<button type="submit" className="alkemy-btn-primary d-inline"><i className="bi bi-search"></i></button>
								<div style={{'height': '1rem', 'maxHeight': '1rem', color: 'red'}}>
								{ errors['search-text'] && touched['search-text'] ?
									<div>{errors['search-text']}</div> : null
								}
								</div>
							</Form>	
						)
					}

				}
			</Formik>
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