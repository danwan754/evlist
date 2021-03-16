import express from 'express';
import data from '../data/data.js';

const { vehicles } = data;

var router = express.Router();

router.get('/list', (req, res) => {
    res.send(vehicles);
});

// router.get('/images/:id', (req, res) => {
//     const vehicle = vehicles.find(x => x._id === req.params.id);
//     // let path = __dirname + vehicle.image;
//     console.log(vehicle.image);
//     res.sendFile(vehicle.image);
// });

export default router;