import express, { json } from 'express';
import videoRoutes from './src/routes/videoRoutes.js';

const app = express();
app.use(json());

app.use('/', videoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
