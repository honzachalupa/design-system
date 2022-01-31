const fs = require("fs");

const packageRootData = fs.readFileSync("./package.json");
const { version } = JSON.parse(packageRootData);

console.info(`Root package version: v${version}`);

["./build/ui/package.json", "./build/utils/package.json"].forEach(
    (packagePath) => {
        const packageData = fs.readFileSync(packagePath);
        const package = JSON.parse(packageData);

        fs.writeFileSync(
            packagePath,
            JSON.stringify({ ...package, version }, null, 4) + "\n",
        );
    },
);

console.info(`All packages set to v${version}.`);
