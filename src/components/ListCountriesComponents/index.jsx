import React from 'react';
import './style.css';

export default function CountriesList({ countries, showTitle = true }) {
  return (
    <div className="wrapper-list">
      {showTitle ? <h5>List of countries:</h5> : null}
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
