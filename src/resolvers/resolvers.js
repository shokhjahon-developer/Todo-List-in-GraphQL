const { randomUUID } = require("crypto");
let { users, todos } = require("../database/database");

const resolvers = {
  Query: {
    users: () => users,
    todos: () => todos,
  },
  User: {
    todos: (parent) => {
      return todos.filter((todo) => todo.userId === parent.id);
    },

  },
  Mutation: {
    addUser: (parent, { details }) => {
      const id = randomUUID();
      const newUser = { ...details, id };
      users.push(newUser);
      return newUser;
    },
    updateUser: (parent, { id, details }) => {
      const user = users.find((user) => user.id == id);
      if (!user) throw new Error("User not found");
      Object.assign(user, details);
      return user;
    },
    deleteUser: (parent, { id }) => {
      const userIndex = users.findIndex((user) => user.id == id);
      if (userIndex == -1) throw new Error("User not found");
      const [deletedUser] = users.splice(userIndex, 1); 
      todos = todos.filter((todo) => todo.userId != id); 
      return deletedUser;
    },
    addTodo: (parent, { details }) => {
      const id = randomUUID();
      const newTodo = { ...details, id };
      todos.push(newTodo);
      return newTodo;
    },
    updateTodo: (parent, { id, details }) => {
      const todo = todos.find((todo) => todo.id == id);
      if (!todo) throw new Error("Todo not found");
      Object.assign(todo, details);
      return todo;
    },
    deleteTodo: (parent, { id }) => {
      const todoIndex = todos.findIndex((todo) => todo.id == id);
      if (todoIndex == -1) throw new Error("Todo not found");
      const [deletedTodo] = todos.splice(todoIndex, 1); 
      return deletedTodo;
    },
  },
};

module.exports = resolvers;
