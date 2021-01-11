const config = require("../config");
const jwt = require("jsonwebtoken");

const login = (request) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        request.user != config.auth.user ||
        request.password != config.auth.password
      ) {
        reject({
          status: 403,
          error: "Usuario o clave inválida",
        });
      }

      jwt.sign(
        { user: request.user },
        "secretkey",
        { expiresIn: "60m" },
        (error, token) => {
          if (error) {
            reject({
              status: 500,
              error: error.message,
            });
          } else {
            resolve({
              status: 200,
              token,
            });
          }
        }
      );
    } catch (error) {
      reject({
        status: 500,
        error: error.message,
      });
    }
  });
};

module.exports = {
  login,
};
