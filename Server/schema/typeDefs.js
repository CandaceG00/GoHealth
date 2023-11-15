const typeDefs = `
    type User {
        _id: ID
        email: String
        favorites: [Recipe]
    }

    type Auth {
        token: String!
        user: User
    }

    type Recipe {
        _id: ID
        title: String
        ingredients: [String!]
    }

    type Query {
        users: [User]
        user(email: String!): User
        me: User
        recipes: [Recipe]
        favorites: [Recipe]
    }
    
    type Mutation {
        register(email: String!, password: String!): Auth

        login(email: String!, password: String!): Auth

        addToFavorites(recipeTitle: String!): User

        removeFromFavorites(recipeTitle: String!): User
    }
`;

module.exports = typeDefs;