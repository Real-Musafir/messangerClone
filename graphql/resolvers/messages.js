const { UserInputError, AuthenticationError } = require("apollo-server");

const { Message, User } = require("../../models");

module.exports = {
  Query: {},
  Mutation: {
    sendMessage: async (parent, { to, content }, { user }) => {
      console.log(parent, "what is parent?");
      try {
        if (!user) throw new AuthenticationError("Unauthenticated");
        const recipient = await User.findOne({ where: { username: to } });

        if (!recipient) {
          throw new UserInputError("User not found");
        } else if (recipient.username === user.username) {
          throw new UserInputError("You can't message your self ");
        }

        if (content.trim() === "") {
          throw new UserInputError("Message is empty");
        }

        const message = await Message.create({
          from: user.username,
          to,
          content,
        });

        return message;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
};
