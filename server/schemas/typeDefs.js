const { gql } = require("apollo-server-express");
const bcrypt = require("bcrypt");

const typeDefs = gql`
  type User {
    _id: ID
    username: String! @unique
    email: String! @unique
    password: String!
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    images: String
    link: String
    title: String!
  }

  type Auth {
    token: ID
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
