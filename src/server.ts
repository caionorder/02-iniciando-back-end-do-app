import express from 'express';
import routes from './routes';

// eslint-disable-next-line import/extensions
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log(' 🚀  Server started on port 3333! 🔥 ');
});
