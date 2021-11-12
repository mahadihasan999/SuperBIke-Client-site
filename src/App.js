import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './Dashboard/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './DisplayView/ErrorScreen';
import ProductsDetails from './DisplayView/ProductsDetails';
import HomeScreen from './DisplayView/HomeScreen';
import OrderSuccessfulScreen from './DisplayView/OrderSuccessfulScreen';
import SignIn from './DisplayView/SignIn';
import Register from './DisplayView/Register';
import MyOrder from './Dashboard/Admin/MyOrder';
import Explore from './components/ExploreAllProduct/Explore';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
            <Navbar />
            <Switch>
              <Route exact path="/"><HomeScreen /></Route>
              <Route exact path="/explore"><Explore /></Route>
              <PublicRoute exact path="/signin"><SignIn /></PublicRoute>
              <PublicRoute exact path="/signup"><Register /></PublicRoute>
              <PrivateRoute exact path="/products/:name"><ProductsDetails /></PrivateRoute>
              <PrivateRoute exact path="/order-successful"><OrderSuccessfulScreen /></PrivateRoute>
              <PrivateRoute exact path="/dashboard">
                <Admin />
              </PrivateRoute>
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
