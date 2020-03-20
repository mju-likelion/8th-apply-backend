import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';

import schema from './schema';
import uploadMiddleware from './upload';

const server = new GraphQLServer({ schema } as any);
server.express.use(logger('dev'));
server.express.post('/api/upload', uploadMiddleware, (req: any, res) => {
  res.json(req.file.location);
});

server.start(() => console.log('Server is running on http://localhost:4000'));
