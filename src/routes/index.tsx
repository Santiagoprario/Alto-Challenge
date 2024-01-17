import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Home, Form, Search } from '../pages';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';


const MainRoutes: FunctionComponent = () => (
	<Routes>
		<Route path="/" element={<ProtectedRoutes />}>
				<Route path="/" element={<Navigate replace to="home" />} />
				<Route path="/home" element={<Home />}>
					<Route path="forms" element={<Form />} />
          <Route path="search" element={<Search />} />
				</Route>
		</Route>

		<Route path="/" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>
	</Routes>
);

export default MainRoutes;
