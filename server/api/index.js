const router = require("express").Router();
module.exports = router;
const isLoggedIn = require("./middleware/is-logged-in");

router.use("/users", require("./users"));

router.use(isLoggedIn);

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
