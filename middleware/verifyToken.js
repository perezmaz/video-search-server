const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, "secretkey", (error, authData) => {
      if (error) {
        res.status(403).send({
          status: 403,
          error: "Token no válido",
        });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({
      status: 403,
      error: "Token no válido",
    });
  }
};

module.exports = verifyToken;
