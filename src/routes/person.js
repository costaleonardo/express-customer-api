const express = require('express');
const router = express.Router();

// @route  GET /person
// @desc   Get person with query string
// @access Public
router.get('/person', (req, res) => {
  if (req.query.name) {
    res.send(`You have requested a person ${req.query.name}`);
  } else {
    res.send('You have requested a person.');
  }
});

// @route  GET /person/:name
// @desc   Get person by name
// @access Public
router.get('/person/:name', (req, res) => {
  res.send(`You have requested a person ${req.params.name}`);
});

// @route  GET /error
// @desc   Forced error
// @access Public
router.get('/error', (req, res) => {
  throw new Error('This is a forced error.');
});

module.exports = router;

