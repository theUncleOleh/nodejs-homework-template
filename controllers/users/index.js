const signin = require("./signin");
const login = require("./login");
const currentUser = require("./currentUser");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendEmail = require("./resendEmail");
module.exports = {
  signin,
  login,
  currentUser,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendEmail,
};
