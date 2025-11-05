import { CanvassResult } from './types';

export default function CanvassResultsList({resultsList}: {resultsList: CanvassResult[]}) {

  return(
    <table className='results-list'>
      <thead>
        <th>Name</th>
        <th>Notes</th>
      </thead>
      <tbody>
      {resultsList.map(result => (
        <tr key={result.id}>
          <td>{result.name}</td>
          <td>{result.notes}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}