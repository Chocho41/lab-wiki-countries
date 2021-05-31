import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            {/*<CountriesList  />*/}
            <Switch>
                <Route exact path="/" component={CountriesList} />
                <Route exact path="/:cca3" />
            </Switch> 
          </div>
        </div>
    </div>
  );
}

export default App;
