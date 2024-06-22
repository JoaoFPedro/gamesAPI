//Imports

import gamesRoute from './routes/gamesRoutes';

const express = require('express')

const app = express();
const port = 3000;

app.use('/api', gamesRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
