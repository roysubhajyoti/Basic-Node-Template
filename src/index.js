const { serverConfig } = require("./config");
const express = require("express");
const app = express();

const apiRoutes = require("./router");
app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(
    `successfully started the server on the PORT ${serverConfig.PORT} `
  );
});
