import { CanvassResult } from "./types";

export default function CanvassResultsList({resultsList}: {resultsList: CanvassResult[]}) {

  return(
    <div>
      <h1>Canvass Results</h1>
      <ul>
        {resultsList.map(result => (
          <li key={result.id}>
            <b>{result.name}: </b>
            {result.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}