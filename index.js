const app = require("./app");
const config = require("./config");

app.listen(config.app.port, () => {
  console.log(`Video Search Running on http://localhost:${config.app.port}/api/${config.app.version}`);
});
