import { Router } from 'express';
import {processVideo}  from '../controllers/videoController.js'

const videoRoutes = Router();

videoRoutes.post('/process-video', processVideo);

export default videoRoutes;
