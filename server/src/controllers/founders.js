const { packageError, logError } = require("../utils/utils");
const Founder = require("../database/connection").founders;

// Get All Function

// Singular Get Function

// Create Function
exports.createFounder = async founder => {
  if (!founder.firstName || !founder.lastName || !founder.title) {
    return packageError(
      400,
      "Please include a first name, last name, and title"
    );
  }

  const newFounder = await Founder.create(founder).catch(logError);

  if (newFounder) {
    return { founder: newFounder, error: null };
  }

  return packageError(500, "internal db error occurred");
};

// Update Function

// Delete Function
