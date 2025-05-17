import React from 'react';
import NavAdmin from './NavAdmin';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <NavAdmin></NavAdmin>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;