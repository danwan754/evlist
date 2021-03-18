import express from 'express';
import list from '../data/list.js';
import topList from '../data/topList.js';

const { vehicles } = list;
const { top } = topList;

var router = express.Router();

router.get('/list', (req, res) => {
    res.send(vehicles);
});

router.get('/top', (req, res) => {
    res.send(top);
});


export default router;