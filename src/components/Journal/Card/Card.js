import './Card.css';

function Card(props) {
    return (
        <div className="card-container">
            <div className="card-cover">
                <img className="card-cover-img" src={props.img} alt={props.title}/>
            </div>

            <div className="card-detail">
                <div className="card-location">
                    <img className="card-country-icon" src="https://png.monster/wp-content/uploads/2021/06/png.monster-10-252x370.png" alt={props.country}/>
                    <span className="card-country-text">{props.country}</span>
                    <a className="card-location-map" href={props.map}>View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <h4 className="card-dates">{props.startDate} - {props.endDate}</h4>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;