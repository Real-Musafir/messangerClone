const { User } = require("../models");

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    register: async (_, args) => {
      const { username, email, password, confirmPassword } = args;
      try {
        //TODO Validate input data
        //TODO Check if username/email exists

        //TODO Create user
        const user = await User.create({
          username,
          email,
          password,
        });

        //TODO Return user
        return user;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
