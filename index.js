const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportUser = require("./passport");
const authRoutes = require("./routes/Auth")

require("dotenv").config();

const app = express();
app.use(require("body-parser").urlencoded({ extended: true }));

//cookie session
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    //represent millisecond
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

//passport
app.use(passport.initialize());
app.use(passport.session());

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,UPDATE,DELETE",
    credentials: true,
  })
);

//port
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});


