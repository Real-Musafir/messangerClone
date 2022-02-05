module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          userName: "johnn",
          email: "john@gmail.com",
        },
        {
          userName: "jenn",
          email: "jen@gmail.com",
        },
      ];
      return users;
    },
  },
};
