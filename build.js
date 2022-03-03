const fs = require("fs");

const iconsDir = fs.readdirSync("./icons");
const icons = {};
for (const icon of iconsDir) {
	const name = icon.replace(".svg", "").toLowerCase();
	icons[name] = String(fs.readFileSync(`./icons/${icon}`));
}

fs.writeFileSync("./dist/icons.json", JSON.stringify(icons));
