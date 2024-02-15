const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

const downloadAudio = (youtubeUrl) => {
    return new Promise((resolve, reject) => {
        const output = path.resolve(__dirname, '../../output', 'audio.mp3');

        const audioStream = ytdl(youtubeUrl, { quality: 'highestaudio', filter: 'audioonly' });
        const fileStream = fs.createWriteStream(output);

        audioStream.pipe(fileStream);

        fileStream.on('finish', () => resolve(output));
        audioStream.on('error', reject);
    });
};

module.exports = { downloadAudio };
