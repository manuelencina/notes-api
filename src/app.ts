import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';

import router from './routes';

const app: Application = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});