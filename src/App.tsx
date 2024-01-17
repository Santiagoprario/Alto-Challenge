import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainRoutes from './containers/routes';

function App() {

  return (
    <>
      <MainRoutes />
      <ToastContainer />
    </>
  )
}

export default App;
