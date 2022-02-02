const fs = require("fs");

const dataRoot = fs.readFileSync("./README.root.md");
const readmeRoot = dataRoot.toString();

let readmeComposed = readmeRoot;

["ui", "utils", "firebase"].forEach((projectKey) => {
    const data = fs.readFileSync(`./packages/${projectKey}/README.md`);
    const readme = data.toString();

    readmeComposed = readmeComposed.replace(
        `{packagePlaceholder_${projectKey}}`,
        readme,
    );
});

fs.writeFileSync("./README.md", readmeComposed);

console.info("Root readme composed.");
