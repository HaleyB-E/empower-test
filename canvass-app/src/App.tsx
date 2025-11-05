import {useEffect, useState} from 'react';
import './App.css';
import { Link } from 'react-router';
import axios, { AxiosResponse } from 'axios';
import {baseUrl, CanvassResult} from './types';
import CanvassResultsList from './CanvassResultsList';

function App() {
  const [canvassResults, setCanvassResults] = useState<CanvassResult[]>([]);

  useEffect(() => {
    // NOTE: long-term cleanup opportunity here to minimize API calls by using caching and only
    //       doing this load from API if cache is not present
    // ADDITIONAL NOTE: there's clearly a race condition or something going on where sometimes the
    //       reload picks up the most recently-added canvass result, and sometimes it doesn't
    axios.get(`${baseUrl}/canvass-response-list`).then((resp: AxiosResponse) => {
      // todo: error handling
      setCanvassResults(resp.data);
    });
  },[]);

  // todo: this should be a number, but it has to get parsed back out from json again on the 
  //    server side so I'm not going to be too picky for the moment
  const handleDelete = (resultId: string|undefined) => {
    axios.delete(`${baseUrl}/canvass-response/${resultId}`);
    setCanvassResults(canvassResults.filter(cr => cr.id !== resultId));
  }

  return (
    <div className='app'>
      <h1>Let's Go Canvassing!!!</h1>
        {canvassResults.length === 0 && 
          <div>
            No results yet - click "Add New" to record a canvassing interaction
          </div>
        }
        {canvassResults.length > 0 &&
          <CanvassResultsList
            resultsList={canvassResults}
            handleDelete={handleDelete}/>
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
