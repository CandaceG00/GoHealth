const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
    }`
