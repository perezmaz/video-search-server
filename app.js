const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const routes = require("./routes/routes");
const cors = require("cors");
const config = require("./config");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    let message = "Internal error";
    switch (error.status) {
      case 400:
        {
          message = "Bad Request";
        }
        break;
      case 404:
        {
          message = "Not Found";
        }
        break;
    }
    res.status(error.status).send({
      status: error.status,
      error: "Bad Request",
    });
  }
});

app.use(`/api/${config.app.version}`, routes);

app.disable("x-powered-by");

module.exports = app;
