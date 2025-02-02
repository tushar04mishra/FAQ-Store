const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS

const { PORT } = require("./config/serverconfig");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();

  // Enable CORS for all routes
  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();
