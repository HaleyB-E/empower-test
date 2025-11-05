import {useState} from 'react';
import {useNavigate} from 'react-router';
import axios from 'axios';
import {baseUrl} from './types';

export default function CanvassDetails() {
  const navigate = useNavigate();
  const [canvassData, setCanvassData] = useState({
    name: '',
    notes: ''
  });

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    
    // TODO: add data validation
    axios.post(`${baseUrl}/new`, canvassData).then((data: any) => {
        console.log(data);
    });
    navigate('/');
  }

  const setName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCanvassData({...canvassData, name: ev.target.value});
  }

  const setNotes = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCanvassData({...canvassData, notes: ev.target.value});
  }

  // todo: validation
  return (
    <div>
      <h1> Enter Contact Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='contactName'>Contact Name: </label>
        <input 
          type='text'
          id='contactName'
          name='contactName'
          value={canvassData.name}
          onChange={setName}
        />
        <br/>
        <label htmlFor='contactNotes'>Notes: </label>
        <textarea
          id='contactNotes'
          name='contactNotes'
          value={canvassData.notes}
          onChange={setNotes}
        />
        <input type='submit'/>
      </form>
    </div>
  );
}
