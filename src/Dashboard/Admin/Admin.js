import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthProvider from '../../contexts/AuthProvider';
import PrivateRoute from '../../routes/PrivateRoute';
import ShowAddedProduct from '../../Dashboard/Admin/ShowAddedProduct';
import UpdateProduct from '../../Dashboard/Admin/UpdateProduct';
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
                            <PrivateRoute path="/dashboard/manage-my-order">
                                <MyOrder></MyOrder>
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/pay">
                                <Payment></Payment>
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/manage-products">
                                <ManageProdcuts />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/add">
                                <ShowAddedProduct />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/addReview">
                                <ShowReview />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/makeAdmin">
                                <MakeAdmin />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard/edit/:id">
                                <UpdateProduct />
                            </PrivateRoute>
                        </Switch>
                    </div>

                </main>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Admin
