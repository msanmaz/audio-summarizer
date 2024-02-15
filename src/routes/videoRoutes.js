const express = require('express');
const { processVideo } = require('../controllers/videoController');

const router = express.Router();

router.post('/process-video', processVideo);

module.exports = router;
