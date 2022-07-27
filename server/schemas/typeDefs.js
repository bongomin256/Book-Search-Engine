const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String!
    images: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input savedBookInput {
    authors: [String]
    description: String!
    bookId: String!
    images: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    savedBook(input: savedBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
