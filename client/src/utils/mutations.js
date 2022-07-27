import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBookInput) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      saveBook {
        Authors
        description
        bookId
        images
        link
        title
      }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!){
    saveBook(bookId: $bookId ){
    
    }
  
  
  }


`;
