const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const originalLog = console.log;
  const logs = [];

  console.log = (msg) => logs.push(msg);

  countStudents(database)
    .then(() => {
      console.log = originalLog;
      res.send(`This is the list of our students\n${logs.join('\n')}`);
    })
    .catch((err) => {
      console.log = originalLog;
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
