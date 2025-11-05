const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

let fakeCanvassResponseDataTable = [];
let idCounter = 1;

app.get('/canvass-response-list', (req, res) => {
  res.send(fakeCanvassResponseDataTable);
});

app.post('/canvass-response', (req, res) => {
  try {
    const newItem = req.body;

    // todo: this is where we'd do data sanitization to prevent sql injection etc
    // but for now, very minimal work to make sure we're saving data in the right shape
    const parsedNewItem = {id: -1, name: '', notes: ''};
    parsedNewItem.name = newItem.name;
    parsedNewItem.notes = newItem.notes;
    
    // if this were a real database, this would be handled automatically by primary key ID column
    parsedNewItem.id = idCounter;
    idCounter++;

    fakeCanvassResponseDataTable.push(parsedNewItem);
    res.send(parsedNewItem.id);
  } catch {
    throw new Error('failed to save new canvass response');
  }
});

app.delete('/canvass-response/:id', (req, res) => {
  try {
    // verify that item to be removed is in the "data table"
    const parsedId = parseInt(req.params.id);
    const indexToRemove = fakeCanvassResponseDataTable.findIndex(cr => cr.id === parsedId);
    if (indexToRemove > -1) {
      fakeCanvassResponseDataTable.splice(indexToRemove,1);
    }
    res.send();
  } catch {
    throw new Error(`Could not delete canvass response with id ${req.params.id}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});