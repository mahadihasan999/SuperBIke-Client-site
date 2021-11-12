import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthProvider from '../../contexts/AuthProvider';
import PrivateRoute from '../../routes/PrivateRoute';
import ShowAddedProduct from '../../Dashboard/Admin/ShowAddedProduct';
import EditTourismDisplay from '../../Dashboard/Admin/EditTourismDisplay';
import ManageProdcuts from './ManageProdcuts';
import MyOrder from '../../Dashboard/Admin/MyOrder';
import SideNav from '../../Dashboard/Drawer/SideNav';
import ShowReview from '../LocalUser/ShowReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../LocalUser/Payment';

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
                            <PrivateRoute exact path="dashboard/manage-my-order">
                                <MyOrder></MyOrder>
                            </PrivateRoute>
                            <PrivateRoute exact path="/dashboard/pay">
                                <Payment></Payment>
                            </PrivateRoute>
                            <PrivateRoute exact path="/dashboard/manage-products">
                                <ManageProdcuts />
                            </PrivateRoute>
                            <PrivateRoute exact path="/dashboard/add">
                                <ShowAddedProduct />
                            </PrivateRoute>
                            <PrivateRoute exact path="/dashboard/addReview">
                                <ShowReview />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/makeAdmin">
                                <MakeAdmin />
                            </PrivateRoute>
                            <PrivateRoute exact path="/dashboard/edit/:id">
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
