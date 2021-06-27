import HeroCard from './../HeroCard';

export const HeroDetail = ({hero}) => {
	
	return (
		<div className="col-12 col-sm-8 col-md-4 mx-auto my-5">
			<HeroCard hero={hero} />
		</div>
	)
};

export default HeroDetail;