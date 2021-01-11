const videoController = require("../controllers/video");
const userController = require("../controllers/user");
const validations = require("../validations/validations");

const videoIndex = async (req, res) => {
  const data = req.query;
  const { error } = await validations("videoIndex", data);
  if (error) {
    res.status(422).send({
      status: 422,
      error: error.details[0].message,
    });
  } else {
    videoController
      .index(data)
      .then((response) => {
        res.status(response.status).send(response);
      })
      .catch((error) => {
        res.status(error.status).send(error);
      });
  }
};

const login = async (req, res) => {
  const data = req.body;
  const { error } = await validations("login", data);
  if (error) {
    res.status(422).send({
      status: 422,
      error: error.details[0].message,
    });
  } else {
    userController
      .login(data)
      .then((response) => {
        res.status(response.status).send(response);
      })
      .catch((error) => {
        res.status(error.status).send(error);
      });
  }
};

module.exports = {
  videoIndex,
  login,
};
