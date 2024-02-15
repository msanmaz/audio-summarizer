const express = require('express');
const { processVideo } = require('../controllers/videoController');

const router = express.Router();

// Route to process the video
router.post('/process-video', processVideo);

module.exports = router;
