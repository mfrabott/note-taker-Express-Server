const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const api = require('./routes/index.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// GET Route for main app page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// app.delete('api/notes/:id', (req, res) =>  
//   res.send('Got a DELETE request at /notes')
// );

// Wildcard directs user to the Index
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
