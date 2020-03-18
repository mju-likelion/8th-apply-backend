import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';

import schema from './schema';

const server = new GraphQLServer({ schema } as any);
server.express.use(logger('dev'));

server.start(() => console.log('Server is running on http://localhost:4000'));
