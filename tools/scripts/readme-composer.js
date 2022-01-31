const fs = require("fs");

const dataRoot = fs.readFileSync("./README.root.md");
const readmeRoot = dataRoot.toString();

const dataUI = fs.readFileSync("./packages/ui/README.md");
const readmeUI = dataUI.toString();

const dataUtils = fs.readFileSync("./packages/utils/README.md");
const readmeUtils = dataUtils.toString();

const readmeComposed = readmeRoot
    .replace("{readmeUI}", readmeUI)
    .replace("{readmeUtils}", readmeUtils);

fs.writeFileSync("./README.md", readmeComposed);

console.log("Readme composed.");
