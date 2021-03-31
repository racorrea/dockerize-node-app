const express = require('express');
const router = express.Router();
const parques = require('../services/parques.js');

router.get('/', async function(req, res, next) {
  try {
    res.json(await parques.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting parques `, err.message);
    next(err);
  }
});

module.exports = router;