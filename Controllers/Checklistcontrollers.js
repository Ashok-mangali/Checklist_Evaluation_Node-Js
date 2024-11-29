const { fetchApplicationData } = require('../Server/Apiserver');
const checklistRules = require('../Config/Checklistrules');

const evaluateChecklist = async () => {
  try {
    const applicationData = await fetchApplicationData();
    const results = checklistRules.map((rule) => ({
      rule: rule.name,
      status: rule.check(applicationData) ? "Passed" : "Failed",
    }));
    return results;
  } catch (error) {
    throw new Error("Error evaluating checklist: " + error.message);
  }
};

module.exports = { evaluateChecklist };
