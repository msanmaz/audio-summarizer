const express = require('express');
const videoRoutes = require('./src/routes/videoRoutes');

const app = express();
app.use(express.json());

app.use('/', videoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
