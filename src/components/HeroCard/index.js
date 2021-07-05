import './index.css';
import { DETAILS_BTN, DELETE_BTN, BACK_BTN, HOME_SCREEN, HERO_SCREEN } from './../../constants';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { alertError } from './../Alerts';
import { getHero, removeMember } from './../../controllers/heroesController';
import { useDispatch } from 'react-redux';

const initialvalues = {
  name: 'Hero\'s Name',
  image: { 'url': 'https://www.androfast.com/wp-content/uploads/2018/01/placeholder.png'},
  powerstats: {
    intelligence: '50',
    strength: '50',
    speed: '50',
    durability: '50',
    power: '50',
    combat: '50',
  },
  biography: {
    "full-name": "Bruce Wayne",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Insider",
      "Matches Malone"
    ],
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "210 lb",
      "95 kg"
    ],
    "eye-color": "blue",
    "hair-color": "black"
  },
  "work": {
    "occupation": "Businessman",
    "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
  },
}

export const HeroCard = ({hero}) => {
  const [data, setData] = useState(initialvalues);
	const location = useLocation();
  const dispatch = useDispatch();

  useEffect( () => {
    if(hero) {
      setData(hero);
    } else {
      const id = location.pathname.substring(6);
      getHero(id).then(res => setData(res), err => alertError(err));
    }
  }, [location.pathname, hero]);

	return (	
		<div className="alkemy-card mx-auto">
      <img className="card-img-top" src={data.image.url} alt={`Imagen de  ${data.name}`} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>

        { location.pathname !== HOME_SCREEN ?
          <>
            <h6>Nombre</h6>
            <p>{data.biography['full-name']}</p>
            <h6>Alias</h6>
            <p>{data.biography['aliases']}</p>
            <h6>Peso</h6>
            <p>{data.appearance.weight[0]} - {data.appearance.weight[1]}</p>
            <h6>Altura</h6>
            <p>{data.appearance.height[0]} - {data.appearance.height[1]}</p>
            <h6>Color de Ojos</h6>
            <p>{data.appearance['eye-color']}</p>
            <h6>Color de Cabello</h6>
            <p>{data.appearance['hair-color']}</p>
            <h6>Lugar de trabajo</h6>
            <p>{data.work['base']}</p>
          </>
        :
          <table className="col-10">
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>Intelligence</td> 
                <td className="text-right pr-4">{data.powerstats.intelligence}</td>
              </tr>
              <tr>
                <td>Strength</td> 
                <td className="text-right pr-4">{data.powerstats.strength}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td className="text-right pr-4">{data.powerstats.speed}</td>
              </tr>
              <tr>
                <td>Durability</td>
                <td className="text-right pr-4">{data.powerstats.durability}</td>
              </tr>
              <tr>
                <td>Power</td> 
                <td className="text-right pr-4">{data.powerstats.power}</td>
              </tr>
              <tr>
                <td>Combat</td>
                <td className="text-right pr-4">{data.powerstats.combat}</td>
              </tr>
            </tbody>
          </table>
        }

        <div className="d-flex justify-content-around btns">
          { location.pathname !== HOME_SCREEN ?
            <Link className="alkemy-btn-primary" to={HOME_SCREEN}>{BACK_BTN}</Link> 
          :
            <>
              <Link className="alkemy-btn-primary" to={`${HERO_SCREEN}/${hero.id}`} >{DETAILS_BTN}</Link>
              <button className="alkemy-btn-danger" onClick={() => {removeMember(hero, dispatch)} }>{DELETE_BTN}</button>
            </>
            }
          
        </div>
      </div>
 		</div>
	)
};

export default HeroCard;