// src/routes/index.js
const express = require('express');
const mocksRouter = require('./mocks.routes.js');

const router = express.Router();
router.use('/api/mocks', mocksRouter);

module.exports = router;