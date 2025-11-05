import {useState} from 'react';
import './App.css';
import { Link } from 'react-router';
import axios, { AxiosResponse } from 'axios';
import {baseUrl} from './types';
import CanvassResultsList from './CanvassResultsList';

function App() {
  const [canvassResults, setCanvassResults] = useState([]);

  const getCanvassResults = () => {
    axios.get(`${baseUrl}/response-list`).then((resp: AxiosResponse) => {
      // todo: error handling
      setCanvassResults(resp.data);
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
        <button type='button' onClick={getCanvassResults}>See Results</button>
        {canvassResults.length > 0 &&
          <CanvassResultsList resultsList={canvassResults}/>
        }
      </header>
    </div>
  );
}

export default App;
