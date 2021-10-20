import React from 'react';
import { Link } from 'react-router-dom';
import COUNTRIES_LIST from '../countries.json';

class CountriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: COUNTRIES_LIST,
    };
  }
  render() {
    return (
      <div>
        <h1>List of Countries:</h1>
        <ol>
          {this.state.list.map((country) => (
            <li key={country.name}>
              <Link to={`/country/${country.name.official}`}>
                {country.name.official}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default CountriesList;
