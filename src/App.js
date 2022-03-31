import './styles/Ofertantes.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Ofertantes from './components/ofertantes';
import Conection from './components/conection';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ofertantes" element={<Ofertantes />}></Route>
        </Routes>
        <Routes>
          <Route path="/lista" element={<Conection />}></Route>
        </Routes>
        <Routes>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
