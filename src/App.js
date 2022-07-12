import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="App">
      <Router basename="/">

        <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/services' element={<Services/>}/>
          <Route  path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
