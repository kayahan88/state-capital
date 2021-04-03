import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
        <img 
          className='background-image' 
          src='https://online.seterra.com/mapimage/en/3003.png' 
          alt='map of united states'
        />
      <Home />
    </div>
  );
}

export default App;
