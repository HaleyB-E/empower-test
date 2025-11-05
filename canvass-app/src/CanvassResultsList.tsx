import { CanvassResult } from './types';

export default function CanvassResultsList(
  {resultsList, handleDelete}: {
    resultsList: CanvassResult[], 
    handleDelete: (id: string|undefined) => void
  }
) {
  return(
    <table className='results-list'>
      {/* Cleanup: fix width of columns so notes is widest and delete is quite narrow */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Notes</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {resultsList.map(result => (
        <tr key={result.id}>
          <td>{result.name}</td>
          <td>{result.notes}</td>
          <td>
            {/* Cleanup styling: replace with trashcan glyphicon */}
            <button onClick={() => handleDelete(result.id)}>X</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}