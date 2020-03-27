import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import cors from 'cors';

import schema from './schema';
import uploadMiddleware from './upload';
import './passport';
import { authenticateJwt } from './passport';

const whitelist = [
  'https://develop.mju-likelion.com',
  'https://mju-likelion.com',
  'http://localhost:3000'
];
const corsOptions: cors.CorsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});
server.express.use(logger('dev'));
server.express.use(authenticateJwt);
server.express.post(
  '/api/upload',
  cors(corsOptions),
  uploadMiddleware,
  (req: any, res) => {
    res.json(req.file.location);
  }
);

server.start(() => console.log('Server is running on http://localhost:4000'));
