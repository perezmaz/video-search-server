const { google } = require("googleapis");
const config = require("../config");

const index = (request) => {
  return new Promise((resolve, reject) => {
    try {
      google
        .youtube("v3")
        .search.list({
          key: config.google.key,
          part: "snippet",
          q: request.text,
        })
        .then((response) => {
          const { data } = response;
          let items = [];
          data.items.forEach((item) => {
            items.push({
              title: item.snippet.title,
              description: item.snippet.description,
              image: item.snippet.thumbnails.medium.url,
              imageSmall: item.snippet.thumbnails.default.url,
            });
          });
          resolve({
            status: 200,
            items,
          });
        })
        .catch((error) => {
          reject({
            status: 500,
            error: error.message,
          });
        });
    } catch (error) {
      reject({
        status: 500,
        error: error.message,
      });
    }
  });
};

module.exports = {
  index,
};
