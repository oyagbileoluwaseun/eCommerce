import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Order from "./components/Order/Order";
import Products from "./components/Order/Products";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Profile/Dashboard";
import './App.css';

function App() {
  return (
   <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>
        <Route path="/cart">
          <NavBar />
          <Order />
        </Route>
        <Route path="/products">
          <NavBar />
          <Products />
        </Route>
        <Route path="/profile">
          <NavBar />
          <Dashboard />
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
