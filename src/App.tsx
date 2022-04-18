import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyle} from './GlobalStyle';
import GlobalFonts from './fonts/fonts';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import EditCurseData from './components/EditCurseData';
import EditDiapositives from './components/EditDiapositives';
import UnityFrame from './components/UnityFrame';
import LandingPage from './components/LandingPage';
import Curses from './components/Curses';
import EditCurses from './components/EditCurses'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/unity' element={<UnityFrame />} />
          <Route path='/resetpassword' element={<ResetPassword/>} />
          <Route path='/editcourse' element={<EditCurseData/>} />
          <Route path='/curses' element={<Curses/>} />
          <Route path='/editcurses' element={<EditCurses/>} />
        </Routes>
        <GlobalStyle />
        <GlobalFonts />
    </Router>

  );
}

export default App;
