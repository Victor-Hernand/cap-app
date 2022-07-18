
import './App.css';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Receptions from './pages/Recepciones/Receptions';
import ReceptionCreate from './pages/Recepciones/ReceptionCreate';


const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Receptions />}/>
      <Route path="/recepciones/crear" element={<ReceptionCreate />}/>
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )

}

export default App;
