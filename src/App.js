import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HotCheetos from './HotCheetos';
import Pepsi from './Pepsi';
import TrailMix from './TrailMix';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/hotcheetos">
          <HotCheetos />
        </Route>
        <Route exact path="/pepsi">
          <Pepsi />
        </Route>
        <Route exact path="/trailmix">
          <TrailMix />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
