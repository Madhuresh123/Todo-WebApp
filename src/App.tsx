import './App.css';
import Menu from './components/Menu';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <div className='dummyText'>
        <p>This is a Sample text</p>
      </div>

    <div className='dashboard'>
      <Menu/>
      <Section/>
      </div>

      
    </div>
  );
}

export default App;
