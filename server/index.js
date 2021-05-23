const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const cors = require("cors");

const { createCompany } = require("./src/controllers/companies");
const { createFounder } = require("./src/controllers/founders");

const app = express();

// Init middleware
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(`${__dirname}/../`, "public")));

// DB Connection
const db = require("./src/database/connection");
db.sequelize.sync({ force: true }).then(async () => {
  const { company } = await createCompany({
    name: "Test",
    city: "City",
    state: "State",
    description: "Boom!",
  });

  await createFounder({
    firstName: "Guy",
    lastName: "Person",
    title: "Software Engineer",
    companyId: company.id,
  });

  await createCompany({
    name: "test2",
    city: "City2",
    state: "State2",
    description: "Boom!!!",
  });
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Bootstrap
// require("./src/bootstrap")();

const BASE_API_PATH = "/api/v1";

// Routes
app.use(`${BASE_API_PATH}/companies`, require("./src/routes/api/companies"));

// App config
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
