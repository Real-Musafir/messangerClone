const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.json");
const { UserInputError, AuthenticationError } = require("apollo-server");

module.exports = (context) => {
  if (context.req && context.req.headers.authorization) {
    const token = context.req.headers.authorization.split("Bearer ")[1];
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        // throw new AuthenticationError("Unauthenticated");
        //don't throw error bcz for other user i should not check they are logged or Not
      }
      context.user = decodedToken;
    });
  }

  return context;
};
