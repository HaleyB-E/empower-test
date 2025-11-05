import React, {useState} from 'react';
import './App.css';
import CanvassDetails from './CanvassDetails';
import { Link } from 'react-router';

function App() {
  const [showCanvassDetails, setShowCanvassDetails] = useState(false);

  const [canvassResults, setCanvassResults] = useState([]);

  const onAddNewClick = (ev: any) => {
    if (!showCanvassDetails) {
      setShowCanvassDetails(true);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Let's Go Canvassing!!!</h1>
        <Link to='new'>
          <button type='button' onClick={onAddNewClick}>
            Add New Contact Record
          </button>
        </Link>
      </header>
    </div>
  );
}

export default App;
