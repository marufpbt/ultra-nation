import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country/Country';
function App() {
  const [countries, setCountries] = useState([]);
  const handleAddCountry = () => {
    console.log('capital added');
  }
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      {
        countries.map(country => <Country handleAddCountry={handleAddCountry} key={country.alpha3Code} country={country}></Country>)
      }
    </div>
  );
}

export default App;
