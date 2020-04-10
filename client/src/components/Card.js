import React from 'react';

const Card = (props) => {
    return (

        <div data-testid="card" className="card">

            <h4 data-testid="name" className="cardText cardName">{props.name}</h4>
            <p data-testid="country" className="cardText cardCountry">{props.country}</p>
            <p data-testid="searches" className="cardText cardSearches">Searches: {props.searches}</p>
            
        </div>

    )
}

export default Card