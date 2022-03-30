import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyle} from './GlobalStyle';
import GlobalFonts from './fonts/fonts';
import ForgotPassword from './components/ForgotPassword';
import UnityFrame from './components/UnityFrame';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<div>Profesor IEPAM</div>} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/unity' element={<UnityFrame />} />
        </Routes>
        <GlobalStyle />
        <GlobalFonts />
    </Router>

  );
}

export default App;
