const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;

    const originalLog = console.log;
    const logs = [];

    console.log = (msg) => logs.push(msg);

    countStudents(database)
      .then(() => {
        console.log = originalLog;
        res.end(`This is the list of our students\n${logs.join('\n')}`);
      })
      .catch((err) => {
        console.log = originalLog;
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;
