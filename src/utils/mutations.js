import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
    mutation registerUser($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
`;

export const ADD_RECIPE = gql`
    mutation addRecipe($title: String!, $ingredients: [String!]!) {
        addRecipe(title: $title, ingredients: $ingredients) {
            _id
            title
            ingredients
        }
    }
`;

export const ADD_TO_FAVORITES = gql`
    mutation addToFavorites($recipeId: ID!) {
        addToFavorites(recipeId: $recipeId) {
            _id
            email
        }
    }
`;

export const REMOVE_FROM_FAVORITES = gql`
    mutation removeFromFavorites($recipeId: ID!) {
        removeFromFavorites(recipeId: $recipeId) {
            _id
            email
        }
    }
`;