import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();


// Configure the OpenAI API client with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
  

export default openai;
