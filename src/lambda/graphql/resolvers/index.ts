import { QueryResolvers } from '../codegen';

const Query: QueryResolvers = {
  hello: () => 'Greetings from GraphQL, running on a serverless function!',
};

export default { Query };
