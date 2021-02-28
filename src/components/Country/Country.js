import React from 'react';
import './Country.css';
const Country = (props) => {
	const { name, flag, population, capital } = props.country;
	const handleAddCountry = props.handleAddCountry;
	return (
		<div style={{display:'flex', justifyContent:'center'}}>
			<div className="card">
				<img src={flag} />
				<h2>{name}</h2>
				<h3>Capital: {capital}</h3>
				<h3>Population: {population}</h3>
				<button onClick={handleAddCountry}>Click Me</button>
			</div>
		</div>
	);
};

export default Country;
