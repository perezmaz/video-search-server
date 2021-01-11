const joi = require("joi");

const validations = (validationCase, data) => {
  let schema;
  switch (validationCase) {
    case "login":
      {
        schema = joi.object().keys({
          user: joi.string().required(),
          password: joi.string().required(),
        });
      }
      break;
    case "videoIndex":
      {
        schema = joi.object().keys({
          text: joi.string().required(),
        });
      }
      break;
  }

  return schema.validate(data);
};

module.exports = validations;
