import {useState} from 'react';
import './App.css';
import { Link } from 'react-router';
import axios from 'axios';
import {baseUrl} from './types';

function App() {
  const [canvassResults, setCanvassResults] = useState([]);

  const getCanvassResults = () => {
    axios.get(`${baseUrl}/response-list`).then((data: any) => {
      console.log(data);
    });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Let's Go Canvassing!!!</h1>
        <Link to='new'>
          <button type='button'>
            Add New Contact Record
          </button>
        </Link>
        <button type='button' onClick={getCanvassResults}> API CALL TEST</button>
      </header>
    </div>
  );
}

export default App;
