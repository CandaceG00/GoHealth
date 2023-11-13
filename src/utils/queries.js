import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query GetUsers {
        users {
            _id
            email
        }
    }
`;

export const GET_USER_BY_EMAIL = gql`
    query GetUserByEmail($email: String!) {
        user(email: $email) {
            _id
            email
        }
    }
`;

export const GET_ME = gql`
    query GetMe {
        me {
            _id
            email
        }
    }
`;

export const GET_RECIPES = gql`
    query GetRecipes {
        recipes {
            _id
            title
            ingredients
        }
    }
`;

export const GET_FAVORITE_RECIPES = gql`
query GetFavoriteRecipes {
    me {
        favorites {
            _id
            title
            ingredients
        }
    }
}
`;