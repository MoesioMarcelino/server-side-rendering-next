const routes = require("next-routes");

module.exports = routes()
  .add("/", "HomePage")
  .add("/users", "users")
  .add("/users/:user", "detail");
