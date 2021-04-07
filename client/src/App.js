import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ListingScreen from './screens/ListingScreen';
import ChargingScreen from './screens/ChargingScreen';
import InfoScreen from './screens/InfoScreen';
import RebateScreen from './screens/RebateScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div className="header-brand">
            <Link to="/">EV-List</Link>
          </div>
          <div className="header-links">
            <Link to="/listing">Vehicles</Link>
            <Link to="/info">Why EV's?</Link>
            <Link to="/charging">Charging</Link>
            <Link to="/rebate">Rebate</Link>
          </div>
        </header>
        <main>
          <div className="main-container">
            <Route path="/" exact component={HomeScreen} />
            <Route path="/listing" component={ListingScreen} />
            <Route path="/charging" component={ChargingScreen} />
            <Route path="/rebate" component={RebateScreen} />
            <Route path="/info" component={InfoScreen} />
          </div>
        </main>
        <footer>
          Developed by Dan Wan.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
