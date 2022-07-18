import './App.css';
import Recepciones from './pages/Recepciones/Recepciones';
import ReceptionPage from './pages/Recepciones/ReceptionPage';
import LoginPage from './pages/Auth/LoginPage';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { UserProvider } from './context/user';
import { AuthMiddleware } from './components/AuthMiddleware';
const App = () => {
  
  return (
    <Router>
      <UserProvider>
      <Routes>
          <Route path="/" element={<AuthMiddleware><Recepciones /></AuthMiddleware>}/>
          <Route path="/receptions/edit" element={<AuthMiddleware><ReceptionPage /></AuthMiddleware>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
      </UserProvider>
    </Router>
  )

}

export default App;
