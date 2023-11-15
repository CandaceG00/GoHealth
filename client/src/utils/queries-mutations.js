import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    users {
      _id
      email
    }
  }
`;

export const GET_RECIPES = gql`
  query {
    recipes {
      _id
      title
      ingredients
    }
  }
`;

export const GET_USER_FAVORITES = gql`
  query {
    me {
      _id
      email
      favorites {
        _id
        title
        ingredients
      }
    }
  }
`;

export const ADD_TO_FAVORITES = gql`
  mutation addToFavorites($recipeTitle: String!) {
    addToFavorites(recipeTitle: $recipeTitle) {
      _id
      email
      favorites {
        _id
        title
        ingredients
      }
    }
  }
`;

export const REMOVE_FROM_FAVORITES = gql`
  mutation removeFromFavorites($recipeTitle: String!) {
    removeFromFavorites(recipeTitle: $recipeTitle) {
      _id
      email
      favorites {
        _id
        title
        ingredients
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register($email: String!, $password: String!) {
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
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
