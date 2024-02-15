const { downloadAudio } = require('../utils/audioDownloader');

const processVideo = async (req, res) => {
    const { youtubeUrl } = req.body;

    try {
        const filePath = await downloadAudio(youtubeUrl);
        res.json({ message: 'Audio downloaded successfully.', filePath });
    } catch (error) {
        console.error('Error in processVideo:', error);
        res.status(500).send({ error: error.message });
    }
};

module.exports = { processVideo };
