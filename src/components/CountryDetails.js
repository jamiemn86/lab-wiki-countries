import { Component } from 'react';
// import { Route } from 'react-router-dom';
import COUNTRIES_LIST from '../countries.json';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    console.log('Component did mount');
    this.loadCountryDetail();
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('Component did update');
    if (previousProps.match.params.cca3 !== this.props.match.params.cca3) {
      this.loadCountryDetail();
    }
  }

  loadCountryDetail() {
    const list = COUNTRIES_LIST.find((country) => {
      return country.cca3 === this.props.match.params.cca3;
    });
    console.log('loadCountryDetail was executed', list);
    this.setState({ list });
  }

  listLanguages(obj) {
    for (const val of Object.values(obj)) {
      return val;
    }
  }

  render() {
    console.log(this.state);
    return (
      (this.state.list && (
        <div>
          <h1>{this.state.list.name.common}</h1>
          <p>
            The people here speak:{' '}
            {Object.values(this.state.list.languages).join(', ')}
          </p>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default CountryDetails;
