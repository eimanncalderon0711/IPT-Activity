const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    post:[Post!]
  }


  type Post {
    id: ID!
    title: String!
    comments: [Comment!]
  }

  type Comment{
    id: ID!
    content: String!
    time: String!
  }
  

  type Query {
    users: [User!]!
    user(id: ID!): User!
    posts: [Post!]
    comments: [Comment!]!
    comment(id: ID!): Comment!
  }
`;

module.exports = { typeDefs };
