import React from 'react';
import './style.css';

export default function CountriesList({ countries }) {
  return (
    <div className="wrapper-list">
      <h5>List of countries:</h5>
      <ul className="list-table">
        {countries.map((country, index) => (
          <li key={`key-country-list-${index}`} className="wrapper-item">
            <img src={country.flag} alt="Flag" width="50px" />
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
