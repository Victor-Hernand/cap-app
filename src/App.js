import './App.css';
import ReceptionPage from './pages/Recepciones/ReceptionPage';
import LoginPage from './pages/Auth/LoginPage';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { UserProvider } from './context/User';
import { ReceptionProvider } from './context/Reception';
import { AuthMiddleware } from './components/AuthMiddleware';
import Receptions from './pages/Recepciones/Receptions';
const App = () => {
  
  return (
    <Router>
      <UserProvider>
      <ReceptionProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/" element={<AuthMiddleware><Receptions /></AuthMiddleware>}/>
          <Route path="/receptions/edit" element={<AuthMiddleware><ReceptionPage /></AuthMiddleware>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ReceptionProvider>
        </UserProvider>  
    </Router>
  )

}

export default App;
