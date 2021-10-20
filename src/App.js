import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>Welcome to WikiCountries</p>
        <CountriesList />
      </header>
      
    </div>
  );
}

export default App;
