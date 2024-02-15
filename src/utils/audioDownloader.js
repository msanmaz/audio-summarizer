import pkg from 'ytdl-core';
import { createWriteStream } from 'fs';
import { resolve as _resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sanitize from 'sanitize-filename';
import openai from './openaiClient.js';

const { getInfo, downloadFromInfo } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const downloadsDir = _resolve(__dirname, '../../output');

const downloadAudio = async (youtubeUrl) => {
    try {
        const videoInfo = await getInfo(youtubeUrl);
        const videoTitle = sanitize(videoInfo.videoDetails.title); 

        const output = _resolve(downloadsDir, `${videoTitle}.mp3`);
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
          });
          console.log(chatCompletion)
        return new Promise((resolve, reject) => {
            const audioStream = downloadFromInfo(videoInfo, {
                quality: 'highestaudio',
                filter: 'audioonly',
            });
            const fileStream = createWriteStream(output);

            audioStream.pipe(fileStream);

            fileStream.on('finish', () => resolve(output));
            audioStream.on('error', reject);
        });

    } catch (error) {
        console.error('Error downloading audio:', error);
        throw error; 
    }
};

export default downloadAudio
