const { gql } = require("apollo-server-express");
const bcrypt = require("bcrypt");

const typeDefs = gql`
  type User {
    _id: ID
    username: String! @unique
    email: String! @unique
    password: String!
    savedBooks: [bookSchema]
  }

  type bookSchema {
    _id: ID
    authors: [String]
    description:String!
    bookId: String!
    images: String
    link: String
    title: String!
  
  }

  type Query {
    users: [User]
    bookSchemas: [bookSchema]
  }

  type Mutation {
    
  
  }


`;

module.exports = typeDefs;
