const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

let fakeCanvassResponseDataTable = [];

app.get('/response-list', (req, res) => {
  res.send('Hello World!')
});

app.post('/new', (req, res) => {
    try {
        const newItem = req.body;

        // todo: this is where we'd do data sanitization to prevent sql injection etc
        // but for now, very minimal work to make sure we're saving data in the right shape
        const parsedNewItem = {id: -1, name: '', notes: ''};
        parsedNewItem.name = newItem.name;
        parsedNewItem.notes = newItem.notes;
        
        // if this were a real database, this would be handled automatically by primary key ID column
        // (this is a little different than a real db would be because it's zero-indexed, but that's fine - it's still unique)
        parsedNewItem.id = fakeCanvassResponseDataTable.length;

        fakeCanvassResponseDataTable.push(parsedNewItem);
        res.send(parsedNewItem.id);
    } catch {
        throw new Error('failed to save new canvass response');
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});