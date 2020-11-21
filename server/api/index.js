const router = require("express").Router();
module.exports = router;
const isAdminUser = require("./middleware/is-admin-user");

router.use("/users", require("./users"));

router.use(isAdminUser);

router.use('/users-admin', require('./users-admin'))

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
