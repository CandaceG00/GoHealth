const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");

const secret = "gohealthsupersecretkey";

const signToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
    email: user.email,
  };

  return jwt.sign({ data: payload }, secret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded.data;
  } catch (err) {
    throw new AuthenticationError("Invalid or expired token");
  }
};

module.exports = { signToken, verifyToken, AuthenticationError };
