export const StatCard = ({stat}) => {

	return (
		<div className="alkemy-card col-4 mx-auto stat">
    	<div className="card-body">
        <h3 className="card-title">{stat.value}</h3>
        <h6 className="card-text">{stat.name}</h6>
    	</div>
		</div>
	)
};

export default StatCard;