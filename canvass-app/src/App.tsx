import {useEffect, useState} from 'react';
import './App.css';
import { Link } from 'react-router';
import axios, { AxiosResponse } from 'axios';
import {baseUrl} from './types';
import CanvassResultsList from './CanvassResultsList';

function App() {
  const [canvassResults, setCanvassResults] = useState([]);

  useEffect(() => {
    // NOTE: long-term cleanup opportunity here to minimize API calls by using caching and only
    //       doing this load from API if cache is not present
    axios.get(`${baseUrl}/response-list`).then((resp: AxiosResponse) => {
      // todo: error handling
      setCanvassResults(resp.data);
    });
  },[]);

  return (
    <div className='app'>
      <h1>Let's Go Canvassing!!!</h1>
        {canvassResults.length === 0 && 
          <div>
            No results yet - click "Add New" to record a canvassing interaction
          </div>
        }
        {canvassResults.length > 0 &&
          <CanvassResultsList resultsList={canvassResults}/>
        }
        <br/>
        <Link to='new'>
          <button type='button'>
            Add New
          </button>
        </Link>
    </div>
  );
}

export default App;
