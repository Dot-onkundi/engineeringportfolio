
import './App.css';
import Allcomponents from './components/Allcomponents';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Allcomponents/>}/>


    </Routes>


  </Router>
  );
}

export default App;
