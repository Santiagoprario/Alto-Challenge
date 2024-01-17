import { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProtectedRoutes: FunctionComponent = () => {
	const isAuth = useAuth();

	return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
