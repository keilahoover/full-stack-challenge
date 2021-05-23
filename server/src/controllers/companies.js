const { packageError, logError } = require("../utils/utils");
const Company = require("../database/connection").companies;

// Get All Function
exports.getAllCompanies = async () => {
  const companies = await Company.findAll().catch(logError);
  return companies;
};

// Singular Get Function
exports.getCompany = async companyId => {
  if (!companyId) {
    return packageError(400, "Please include company id");
  }
  const company = await Company.findAll({
    where: {
      id: companyId
    }
  }).catch(logError);
  if (company) {
    return {
      company,
      error: null
    };
  }
  return packageError(500, "internal db error occurred");
};

// Create Function
exports.createCompany = async company => {
  if (
    !company.name ||
    !company.city ||
    !company.state ||
    !company.description
  ) {
    return packageError(
      400,
      "Please include a name, location, and description"
    );
  }

  const newCompany = await Company.create(company).catch(logError);

  if (newCompany) {
    return { company: newCompany, error: null };
  }

  return packageError(500, "internal db error occurred");
};

// Update Function
exports.updateCompany = async company => {
  const updatedCompany = await Company.update(company).catch(logError);

  if (updatedCompany) {
    return { company: updatedCompany, error: null };
  }

  return packageError(500, "internal db error occurred");
};

// Delete Function
exports.deleteCompany = async company => {
  const removeCompany = await Company.delete(company).catch(logError);

  if (removeCompany) {
    return { company: removeCompany, error: null };
  }
};
