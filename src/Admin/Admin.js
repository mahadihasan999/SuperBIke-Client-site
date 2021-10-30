import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthProvider from '../contexts/AuthProvider';
import PrivateRoute from '../routes/PrivateRoute';
import AddTourismDisplay from './AddTourismDisplay';
import EditTourismDisplay from './EditTourismDisplay';
import ManageTourismDisplay from './ManageTourismDisplay';
import MyOrder from './MyOrder';
import SideNav from './SideNav';

const Admin = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10">
                    <div className="col-span-1">
                        <SideNav />
                    </div>
                    <div className="col-span-4 my-24 px-6">
                        <Switch>
                            <PrivateRoute exact path="/myOrder/manage-my-order">
                                <MyOrder></MyOrder>
                            </PrivateRoute>
                            <PrivateRoute exact path="/admin/manage-products">
                                <ManageTourismDisplay />
                            </PrivateRoute>
                            <PrivateRoute exact path="/admin/add">
                                <AddTourismDisplay />
                            </PrivateRoute>
                            <PrivateRoute exact path="/admin/edit/:id">
                                <EditTourismDisplay />
                            </PrivateRoute>
                        </Switch>
                    </div>

                </main>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Admin
