const icons = require("./icons.json");

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

const longNames = {
	js: "javascript",
	ts: "typescript",
	nodejs: "nodejs",
	py: "python",
	html: "html",
	css: "css",
	tw: "tailwindcss",
	vue: "vuejs",
	nuxt: "nuxtjs",
	prisma: "prisma",
	docker: "docker",
	figma: "figma",
	go: "golang",
	rust: "rust",
	react: "react",
	cf: "cloudflare",
	java: "java",
	php: "php",
	ruby: "ruby",
	cs: "C#",
	cpp: "c++",
	c: "c",
	swift: "swift",
	kt: "kotlin",
	dart: "dart",
	wasm: "webassembly",
	mysql: "mysql",
	postgres: "postgresql",
	redis: "redis",
	jquery: "jquery",
	angular: "angular",
	svelte: "svelte",
	git: "git",
	k8s: "kubernetes",
	deno: "deno",
	vim: "vim",
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
];

function parseShortNames(names, theme = "light") {
	return names.map(
		(name) =>
			longNames[name] +
			(themedIcons.includes(longNames[name]) ? `-${theme}` : "")
	);
}

async function handleRequest(request) {
	const { pathname, searchParams } = new URL(request.url);

	const path = pathname.split("/")[1];
	if (path === "icons") {
		const iconParam = searchParams.get("i");
		if (!iconParam) return new Response("No icons specified", { status: 400 });
		const iconShortNames = iconParam.split(",");
		const iconNames = parseShortNames(iconShortNames);
		if (!iconNames) return new Response("Invalid icon params", { status: 400 });

		const svg = generateSvg(iconNames);

		return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
	}
}

addEventListener("fetch", (event) => {
	event.respondWith(
		handleRequest(event.request).catch(
			(err) => new Response(err.stack, { status: 500 })
		)
	);
});
