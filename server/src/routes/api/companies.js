const express = require("express");
const router = express.Router();
const Company = require("../../database/connection").companies;
const {
  createCompany,
  getAllCompanies,
  getCompany,
  updatedCompany
} = require("../../controllers/companies");

// Get all companies
router.get("/", async (req, res) => {
  const companies = await getAllCompanies();
  res.json(companies);
});

// Create Company
router.post("/", async (req, res) => {
  const newCompany = {
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    description: req.body.description,
    foundedDate: req.body.foundedDate
  };

  const { company, error } = await createCompany(newCompany);

  if (error) {
    res.status(error.status).json({ msg: error.message });
  } else if (company) {
    res.json(company);
  }
});

// Get Singular company
router.get("/:id", async (req, res) => {
  const { company, error } = await getCompany(req.params.id);

  if (error) {
    res.status(error.status).json({ msg: error.message });
  } else if (company) {
    res.json(company);
  }
});

// Update Company
router.put("/:id", async (req, res) => {
  const company = await Company.findAll({
    where: {
      id: req.params.id
    }
  }).catch(logError);

  if (company && company.length > 0) {
    const updateCompany = req.body;
    const result = await Company.update(
      {
        name: updateUser.name ? updateUser.name : company[0].name,
        city: updateUser.city ? updateUser.city : company[0].city,
        state: updateUser.state ? updateUser.state : company[0].state,
        description: updateUser.description
          ? updateUser.description
          : company[0].description
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).catch(logError);

    res.json({ msg: "company updated", updateUser });
  } else {
    res.status(400).json({ msg: "company not found" });
  }
});

// Delete Company
router.delete("/:id", async (req, res) => {
  const company = await Company.findAll({
    where: {
      id: req.params.id
    }
  }).catch(logError);

  if (company && companyh.length > 0) {
    const company = Company.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json({
      msg: "Company deleted",
      company
    });
  } else {
    res.status(400).json({ msg: "company not found" });
  }
});

// Helpers

const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize;
  const limit = pageSize;

  return {
    offset,
    limit
  };
};

module.exports = router;
