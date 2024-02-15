const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const sanitize = require('sanitize-filename'); 

const downloadAudio = async (youtubeUrl) => {
    try {
        const videoInfo = await ytdl.getInfo(youtubeUrl);
        const videoTitle = sanitize(videoInfo.videoDetails.title); 

        const output = path.resolve(__dirname, '../../output', `${videoTitle}.mp3`);

        return new Promise((resolve, reject) => {
            const audioStream = ytdl.downloadFromInfo(videoInfo, {
                quality: 'highestaudio',
                filter: 'audioonly',
            });
            const fileStream = fs.createWriteStream(output);

            audioStream.pipe(fileStream);

            fileStream.on('finish', () => resolve(output));
            audioStream.on('error', reject);
        });
    } catch (error) {
        console.error('Error downloading audio:', error);
        throw error; 
    }
};

module.exports = { downloadAudio };
