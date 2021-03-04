import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RankingScreen from './screens/RankingScreen';
import CompareScreen from './screens/CompareScreen';
import ListingScreen from './screens/ListingScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div className="brand">
            <Link to="/">EV-List</Link>
          </div>
          <div className="header-links">
            <Link to="/rankings">Rankings</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/listing/tesla">Tesla</Link>
            <Link to="/listing/generalmotors">General Motors</Link>
            <Link to="/listing/nissan">Nissan</Link>
            <Link to="/listing/porsche">Porsche</Link>
            <Link to="/listing/other">Other</Link>
          </div>
        </header>
        <main>
          <div>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/rankings" component={RankingScreen} />
            <Route path="/compare" component={CompareScreen} />
            <Route path="/listing/:manufacturer" component={ListingScreen} />
          </div>
        </main>
        <footer>
          All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
