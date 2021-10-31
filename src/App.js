import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './DisplayView/ErrorScreen';
import SpotDetailScreen from './DisplayView/SpotDetailScreen';
import HomeScreen from './DisplayView/HomeScreen';
import OrderSuccessfulScreen from './DisplayView/OrderSuccessfulScreen';
import SignInScreen from './DisplayView/SignInScreen';
import SignUpScreen from './DisplayView/SignUpScreen';
import MyOrder from './Admin/MyOrder';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
            <Navbar />
            <Switch>
              <Route exact path="/"><HomeScreen /></Route>
              <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
              <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
              <PrivateRoute exact path="/location/:name"><SpotDetailScreen /></PrivateRoute>
              <PrivateRoute exact path="/order-successful"><OrderSuccessfulScreen /></PrivateRoute>
              <PrivateRoute exact path="/admin"><Admin /></PrivateRoute>
              <PrivateRoute exact path="/myOrder"><MyOrder /></PrivateRoute>
              <Route path="*"><ErrorScreen /></Route>
            </Switch>
          </DeliveryProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
