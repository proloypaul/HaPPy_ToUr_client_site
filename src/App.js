
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Context/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrder from './Components/Manageorder/ManageOrder';
import NotFind from './Components/NotFind/NotFind';
import OrderForm from './Components/OrderForm/OrderForm';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <AuthProvider>
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
          <PrivateRoute path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/manageAllOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/orderform">
            <OrderForm></OrderForm>
          </Route>
          <Route path="*">
            <NotFind></NotFind>
          </Route>
        </Switch>
        <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
