
const typeDefs =`#graphql
  type User {
    id: ID
    fullname: String
    username: String
    password: String
    todos: [Todo]
  }

  enum Importance {
    IMPORTANT
    LESS_IMPORTANT
    NOT_IMPORTANT
  }

  type Todo {
    id: ID
    title: String
    importance: Importance
    isDone: Boolean
    userId: ID
  }

  type Mutation {
    addUser(details: UserFields!): User
    updateUser(id: String!, details: UserFields!): User
    deleteUser(id: String!): User

    addTodo(details: TodoFields!): Todo
    updateTodo(id: String!, details: TodoFields!): Todo
    deleteTodo(id: String!): Todo
  }

  input UserFields {
    fullname: String!
    username: String!
    password: String!
  }

  input TodoFields {
    title: String!
    importance: Importance!
    isDone: Boolean
    userId: ID!
  }

  type Query {
    users: [User]
    todos: [Todo]
  }
`;

module.exports = typeDefs;
