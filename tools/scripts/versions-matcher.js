const fs = require("fs");

const packageRootData = fs.readFileSync("./package.json");
const { version } = JSON.parse(packageRootData);

console.info(`Root package version: v${version}`);

["ui", "utils", "firebase-connector"].forEach((projectKey) => {
    const packagePath = `./packages/${projectKey}/package.json`;
    const packageData = fs.readFileSync(packagePath);
    const package = JSON.parse(packageData);

    fs.writeFileSync(
        packagePath,
        JSON.stringify({ ...package, version }, null, 4) + "\n",
    );
});

console.info(`All packages set to v${version}.`);
