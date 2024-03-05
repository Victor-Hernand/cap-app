import './App.css';
import 'prevent-pull-refresh';
import ReceptionPage from './pages/Recepciones/ReceptionPage';
import LoginPage from './pages/Auth/LoginPage';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { UserProvider } from './context/user';
import { ReceptionProvider } from './context/Reception';
import { AuthMiddleware } from './components/AuthMiddleware';
import Receptions from './pages/Recepciones/Receptions';
import ShowReception from './pages/Recepciones/ShowReception';
import ReceptionPdf from './pages/Recepciones/ReceptionPdf';
import Diagnostic from './pages/Diagnostic/Diagnostic';
import { DiagnosticProvider } from './context/Diagnostic';
import DiagnosticPage from './pages/Diagnostic/DiagnosticPage';
import ShowDiagnostic from './pages/Diagnostic/ShowDiagnostic';
import DiagnosticPdf from './pages/Diagnostic/DiagnosticPdf';

const App = () => {
  
  return (
    <Router>
      <UserProvider>
      <ReceptionProvider>
        <DiagnosticProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/" element={<AuthMiddleware><Receptions /></AuthMiddleware>}/>
          <Route path="/receptions/edit" element={<AuthMiddleware><ReceptionPage /></AuthMiddleware>}/>
          <Route path="/receptions/show/:id" element={<AuthMiddleware><ShowReception /></AuthMiddleware>}/>
          <Route path="/receptions/pdf/:id" element={<AuthMiddleware><ReceptionPdf /></AuthMiddleware>}/>
          <Route path="/diagnostic" element={<AuthMiddleware><Diagnostic /></AuthMiddleware>}/>
          <Route path="/diagnostic/edit" element={<AuthMiddleware><DiagnosticPage /></AuthMiddleware>}/>
          <Route path="/diagnostic/show/:id" element={<AuthMiddleware><ShowDiagnostic /></AuthMiddleware>}/>
          <Route path="/diagnostic/pdf/:id" element={<AuthMiddleware><DiagnosticPdf /></AuthMiddleware>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </DiagnosticProvider>
        </ReceptionProvider>
        </UserProvider>  
    </Router>
  )

}

export default App;
