
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route strict path='/' element={<Content key="general" category="general" /> }></Route>
          <Route exact path='/everything' element={<Content key="general" category="general" />} ></Route>
          <Route exact path='/sports' element={<Content key="sports" category="sports" />} ></Route>
          <Route exact path='/entertainment' element={<Content key="entertainment" category="entertainment" />} ></Route>
          <Route exact path='/health' element={<Content key="health" category="health" />} ></Route>
          <Route exact path='/politics' element={<Content key="politics" category="politics" />} ></Route>
          <Route exact path='/technology' element={<Content key="technology" category="technology" />} ></Route>
          <Route exact path='/business' element={<Content key="business" category="business" />} ></Route>
        </Routes>
        

      </Router>

    </div>
  );
}

export default App;


