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
import { SEARCH_BASE_URL } from "./config";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: SEARCH_BASE_URL,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword/>} />
            <Route path='/unity' element={<UnityFrame />} />
            <Route path='/editcourse' element={<EditCurseData/>} />
          </Routes>
          <GlobalStyle />
          <GlobalFonts />
      </Router>
    </ApolloProvider>


  );
}

export default App;
