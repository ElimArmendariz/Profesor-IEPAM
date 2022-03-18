import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyle} from './GlobalStyle';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<div>Profesor IEPAM</div>} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
        <GlobalStyle />
    </Router>

  );
}

export default App;
