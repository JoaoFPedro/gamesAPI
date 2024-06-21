// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import gamesRoute from './routes/gamesRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', gamesRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
