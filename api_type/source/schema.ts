import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        users: [User]
    }
    type User {
        id: Int
        email: String
        password: String
    }
`);

export default schema;