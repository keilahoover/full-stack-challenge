exports.packageError = (status, message) => ({
  company: null,
  error: { status, message }
});

exports.logError = err => {
  console.log("Error: ", err);
};
