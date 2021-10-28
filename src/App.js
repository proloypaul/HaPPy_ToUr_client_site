
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFind from './Components/NotFind/NotFind';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services"> 
          <Services></Services>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFind></NotFind>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;