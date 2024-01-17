import React, { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PublicRoutes: FunctionComponent = () => {
	const isAuth = useAuth();

	return isAuth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;
