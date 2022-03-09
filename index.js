const icons = require("./dist/icons.json");
const iconNameList = Object.keys(icons).map((i) => i.split("-")[0]);
const shortNames = {
	js: "javascript",
	ts: "typescript",
	py: "python",
	tailwind: "tailwindcss",
	vue: "vuejs",
	nuxt: "nuxtjs",
	go: "golang",
	cf: "cloudflare",
	cs: "C#",
	cpp: "c++",
	c: "c",
	wasm: "webassembly",
	postgres: "postgresql",
	k8s: "kubernetes",
	next: "nextjs",
	mongo: "mongodb",
	md: "markdown",
};
const themedIcons = [
	"nodejs",
	"python",
	"tailwindcss",
	"vuejs",
	"nuxtjs",
	"figma",
	"react",
	"cloudflare",
	"java",
	"php",
	"kotlin",
	"dart",
	"mysql",
	"postgresql",
	"redis",
	"angular",
	"deno",
	"vim",
	"nextjs",
	"grafana",
	"clojure",
	"coffeescript",
	"lua",
	"markdown",
	"r",
	"unity",
	"zig",
];

const ICONS_PER_LINE = 15;
const SVG_WIDTH = 800;

function generateSvg(iconNames) {
	const iconSvgList = iconNames.map((i) => icons[i]);

	const length = ICONS_PER_LINE * 300;
	const height = Math.ceil(iconSvgList.length / ICONS_PER_LINE) * 300 - 44;
	const scaledHeight = height * (SVG_WIDTH / length);

	return `
  <svg width="${SVG_WIDTH}" height="${scaledHeight}" viewBox="0 0 ${length} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    ${iconSvgList
			.map(
				(i, index) =>
					`
        <g transform="translate(${(index % ICONS_PER_LINE) * 300}, ${
						Math.floor(index / ICONS_PER_LINE) * 300
					})">
          ${i}
        </g>
        `
			)
			.join(" ")}
  </svg>
  `;
}

function parseShortNames(names, theme = "dark") {
	return names.map((name) => {
		if (iconNameList.includes(name))
			return name + (themedIcons.includes(name) ? `-${theme}` : "");
		else if (name in shortNames)
			return (
				shortNames[name] +
				(themedIcons.includes(shortNames[name]) ? `-${theme}` : "")
			);
	});
}

async function handleRequest(request) {
	const { pathname, searchParams } = new URL(request.url);

	const path = pathname.split("/")[1];

	if (!path)
		return Response.redirect("https://github.com/tandpfun/skill-icons", 301);

	if (path === "icons" || path === "icons.svg") {
		const iconParam = searchParams.get("i") || searchParams.get("icons");
		if (!iconParam)
			return new Response("You didn't specify any icons!", { status: 400 });
		const theme = searchParams.get("t") || searchParams.get("theme");
		if (theme && theme !== "dark" && theme !== "light")
			return new Response('Theme must be either "light" or "dark"', {
				status: 400,
			});
		const iconShortNames = iconParam.split(",");
		const iconNames = parseShortNames(iconShortNames, theme || undefined);
		if (!iconNames)
			return new Response("You didn't format the icons param correctly!", {
				status: 400,
			});

		const svg = generateSvg(iconNames);

		return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
	} else {
		return new Response("404: Not Found", { status: 404 });
	}
}

addEventListener("fetch", (event) => {
	event.respondWith(
		handleRequest(event.request).catch(
			(err) => new Response(err.stack, { status: 500 })
		)
	);
});
