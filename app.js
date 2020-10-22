const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(routes);

app.listen(2000, () => {
  console.log("server is running on  http://localhost:2000");
});
