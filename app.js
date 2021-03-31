import express from 'express';
import path from 'path';
import carRoute from './routes/carRoute.js';

const __dirname = process.cwd();
var app = express();
app.use(express.json());

app.use('/api', carRoute);

// access vehicle images
app.use('/images', express.static('data/images'));

app.use(express.static(path.join(__dirname, '/client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});