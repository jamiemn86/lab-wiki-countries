import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>Welcome to WikiCountries</p>
        {/* <CountriesList /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" component={CountriesList} exact />
            <Route path="/country/:cca3" component={CountryDetails} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
