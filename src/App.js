import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Main from './screens/Main';
import ResetPassword from './screens/ResetPassword';
import './styles/Home.css';
import { SnackbarProvider } from 'notistack';

export default function App() {

  return (
    <div className='Home-header' style={{backgroundColor: '#CAD2C5'}}>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="signUp" element={<SignUp />} />
          <Route path="main" element={<Main />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Routes>
     </SnackbarProvider>
    </div>
  );
}