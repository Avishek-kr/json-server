import { useState } from 'react';
import './App.css';
import TripList from './component/TripList';

function App() {
  const [hide, setHide] = useState(true)

  return (
    <div className="App">
    <button onClick={()=>setHide(false)}></button>
    {hide && <TripList />}
    </div>
  );
}

export default App;
