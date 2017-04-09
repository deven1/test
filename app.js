const express = require("express");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  defaultLayout: "main"
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(session({
  secret: 'imasecretshhhhhhh',
  resave: false,
  saveUninitialized: true
}));

// routes
const index = require("./routes/index");
const login = require("./routes/login");
const storage = require('./routes/storage');
app.use("/", index);
app.use("/login", login);
app.use('/storage', storage);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
