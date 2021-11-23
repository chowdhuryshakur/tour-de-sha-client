import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './custome/components/header/Header'
import './App.css';
import Home from './custome/home/Home'
import Services from './custome/services/Services';
import NotFound from './custome/NotFound';
import Footer from './custome/components/footer/Footer';
import Login from './custome/login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './custome/components/PrivateRoute';
import Booking from './custome/book/Booking';
import MyBooking from './custome/myBooking/MyBooking';
import ManageBooking from './custome/manageBooking/ManageBooking';
import AddOffers from './custome/addOffers/AddOffers';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/details/:cid">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/mybooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute path="/managebooking">
            <ManageBooking></ManageBooking>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/addoffers">
            <AddOffers></AddOffers>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

