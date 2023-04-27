const router = require("express").Router();
const passport = require("passport");

//login failed route
router.get("/login/failed", (req, res) => {
  res.status(401).json({ error: true, message: "Login Failure" });
});

//login passed route
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "User Exist",
      user: req.user,
    });
  } else {
    res.status(401).json({ error: true, message: "No User Found" });
  }
});

//google callback route
router.get(
  "/google/callback/",
  passport.authenticate("google", {
    successRedirect: process.env.clientID,
    failureRedirect: "/login/failed",
  })
);

//google auth
router.get("/google", passport.authenticate("google", ["profile", "email"]));

// //logout url
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.BASE_URL);
});

module.exports = router;
