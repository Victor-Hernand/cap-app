
import './App.css';
import Recepciones from './pages/Recepciones/Recepciones';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Recepciones />}/>
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )

}

export default App;
