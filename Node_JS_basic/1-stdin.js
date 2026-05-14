process.stdout.write('Welcome to Holberton School, what is your name?
');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.trim()}
`);
});

process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing
');
  process.exit();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing
');
});
