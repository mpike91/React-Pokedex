import './App.css';
import Pokegame from './Pokegame.js';
import pokelist from './pokelist.js';

function App() {
  return (
    <div className="App">
      <Pokegame pokemon={pokelist} />
    </div>
  );
}

export default App;
