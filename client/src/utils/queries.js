import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    _id
    username
    saveBooks {
      bookId
      authors
      description
      images
      link
      title
    }
  }
`;
