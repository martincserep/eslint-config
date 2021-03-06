const baseRules = require("./rules/base");
const reactRules = require("./rules/react");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies(["eslint-config-airbnb"]);

module.exports = {
	extends: ["airbnb"],
	rules: {
		...baseRules,
		...reactRules,
	},
};
