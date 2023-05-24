import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Section from './components/Section';
import Register from './pages/Register';
import Login from './pages/Login';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={
          <>
      <div className='dummyText'>
        <p>This is a Sample text</p>
      </div>

    <div className='dashboard'>
      <Menu/>
      <Section/>
      </div>
      </>
  } />
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/calculator' element={<Calculator/>}/>


    </Routes>
    </Router>
    </div>

  );
}

export default App;
