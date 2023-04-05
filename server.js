'use strict';

const app = require('express')();
const images = require('./src/images.json');
const compression = require('compression')

app.use(compression())

/*const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};*/

app.get('/images', ({ query }, res) => {
  const i = (query.limit) ? images.slice(0, parseInt(query.limit)) : images;

  res.setHeader('Cache-Control', 'public, max-age=3600');
  
  //setTimeout(() => {
    return res.status(200).json(i);
  //}, randomInterval(500, 1500));
});

app.listen(5001, () => {
  process.stdout.write('Server is available on http://localhost:5001/\n');
});

process.on('uncaughtException', (err) => {
  console.error('Unhandled exception:', err);
  process.exit(1);
});
