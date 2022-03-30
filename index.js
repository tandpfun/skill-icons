const icons = require('./dist/icons.json');
const iconNameList = [...new Set(Object.keys(icons).map(i => i.split('-')[0]))];
const shortNames = {
  js: 'javascript',
  ts: 'typescript',
  py: 'python',
  tailwind: 'tailwindcss',
  vue: 'vuejs',
  nuxt: 'nuxtjs',
  go: 'golang',
  cf: 'cloudflare',
  wasm: 'webassembly',
  postgres: 'postgresql',
  k8s: 'kubernetes',
  next: 'nextjs',
  mongo: 'mongodb',
  md: 'markdown',
  ps: 'photoshop',
  ai: 'illustrator',
  pr: 'premiere',
  ae: 'aftereffects',
  scss: 'sass',
  sc: 'scala',
  net: 'dotnet',
  gatsbyjs: 'gatsby',
  gql: 'graphql',
  vlang: 'v',
  amazonwebservices: 'aws',
  bots: 'discordbots',
  express: 'expressjs',
  googlecloud: 'gcp',
  mui: 'materialui',
  windi: 'windicss',
  unreal: 'unrealengine',
  nest: 'nestjs',
  ktorio: 'ktor',
  pwsh: 'powershell',
};
const urlMaps = {
  aws: 'https://aws.amazon.com/',
  activitypub: 'https://activitypub.rocks/',
  actix: 'https://actix.rs/',
  aftereffects: 'https://www.adobe.com/products/aftereffects.html',
  aiscript: 'https://github.com/syuilo/aiscript',
  angular: 'https://angular.io/',
  ansible: 'https://www.ansible.com/',
  apollo: 'https://www.apollographql.com/',
  appwrite: 'https://appwrite.io/',
  autocad: 'https://www.autodesk.com/products/autocad/overview',
  azul: 'https://azul.rs/',
  bsd: 'https://bsd.org/',
  bash: 'https://www.gnu.org/software/bash/',
  blender: 'https://www.blender.org/',
  bootstrap: 'https://getbootstrap.com/',
  c: 'https://www.iso.org/standard/74528.html',
  cpp: 'https://isocpp.org/',
  cs: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  css: 'https://www.w3.org/TR/CSS/#css',
  clojure: 'https://clojure.org/',
  cloudflare: 'https://www.cloudflare.com/',
  coffeescript: 'https://coffeescript.org/',
  deno: 'https://deno.land/',
  dart: 'https://dart.dev/',
  discord: 'https://discord.com/',
  discordbots: 'https://discord.com/developers/docs/intro',
  docker: 'https://www.docker.com/',
  dotnet: 'https://dotnet.microsoft.com/',
  eclipse: 'https://www.eclipse.org/',
  electron: 'https://www.electronjs.org/',
  emacs: 'https://www.gnu.org/software/emacs/',
  emotion: 'https://emotion.sh/',
  express: 'https://expressjs.com/',
  figma: 'https://www.figma.com/',
  firebase: 'https://firebase.google.com/',
  flutter: 'https://flutter.dev/',
  fortran: 'https://fortran-lang.org/',
  gcp: 'https://cloud.google.com/',
  gtk: 'https://www.gtk.org/',
  gamemakerstudio: 'https://www.yoyogames.com/en/gamemaker',
  gatsby: 'https://www.gatsbyjs.com/',
  gherkin: 'https://cucumber.io/docs/gherkin/',
  git: 'https://git-scm.com/',
  golang: 'https://go.dev/',
  godot: 'https://godotengine.org/',
  grafana: 'https://grafana.com/',
  graphql: 'https://graphql.org/',
  html: 'https://html.spec.whatwg.org/',
  haxe: 'https://haxe.org/',
  haxeflixel: 'https://haxeflixel.com/',
  idea: 'https://www.jetbrains.com/idea/',
  illustrator: 'https://www.adobe.com/products/illustrator.html',
  jquery: 'https://jquery.com/',
  java: 'https://java.com/',
  javascript: 'https://www.javascript.com/',
  jenkins: 'https://www.jenkins.io/',
  kotlin: 'https://kotlinlang.org/',
  ktor: 'https://ktor.io/',
  kubernetes: 'https://kubernetes.io/',
  latex: 'https://www.latex-project.org/',
  laravel: 'https://laravel.com/',
  linux: 'https://kernel.org/',
  lua: 'https://www.lua.org/',
  markdown: 'https://daringfireball.net/projects/markdown/',
  materialui: 'https://mui.com/',
  mongodb: 'https://www.mongodb.com/',
  mysql: 'https://www.mysql.com/',
  nestjs: 'https://nestjs.com/',
  nextjs: 'https://nextjs.org/',
  nim: 'https://nim-lang.org/',
  nodejs: 'https://nodejs.org/',
  nuxtjs: 'https://nuxtjs.org/',
  openshift: 'https://www.redhat.com/en/technologies/cloud-computing/openshift',
  php: 'https://www.php.net/',
  photoshop: 'https://www.adobe.com/products/photoshop.html',
  plan9: 'https://9p.io/plan9/',
  postgresql: 'https://www.postgresql.org/',
  premiere: 'https://www.adobe.com/products/premiere.html',
  prisma: 'https://www.prisma.io/',
  prometheus: 'https://prometheus.io/',
  pug: 'https://pugjs.org/',
  python: 'https://www.python.org/',
  qt: 'https://www.qt.io/',
  r: 'https://www.r-project.org/',
  rails: 'https://rubyonrails.org/',
  react: 'https://reactjs.org/',
  redis: 'https://redis.io/',
  remix: 'https://remix.run/',
  rust: 'https://www.rust-lang.org/',
  rocket: 'https://rocket.rs/',
  svg: 'https://www.w3.org/Graphics/SVG/',
  sass: 'https://sass-lang.com/',
  scala: 'https://www.scala-lang.org/',
  solidity: 'https://soliditylang.org/',
  spring: 'https://spring.io/',
  stackoverflow: 'https://stackoverflow.com/',
  styledcomponents: 'https://styled-components.com/',
  supabase: 'https://supabase.com/',
  tailwindcss: 'https://tailwindcss.com/',
  tauri: 'https://tauri.studio/',
  typescript: 'https://www.typescriptlang.org/',
  unity: 'https://unity.com/',
  unrealengine: 'https://www.unrealengine.com/',
  v: 'https://vlang.io/',
  vim: 'https://www.vim.org/',
  vscode: 'https://code.visualstudio.com/',
  vala: 'https://wiki.gnome.org/Projects/Vala',
  vuejs: 'https://vuejs.org/',
  webassembly: 'https://webassembly.org/',
  windicss: 'https://windicss.org/',
  wordpress: 'https://wordpress.org/',
  workers: 'https://workers.cloudflare.com/',
  zig: 'https://ziglang.org/',
};
const themedIcons = [
  ...Object.keys(icons)
    .filter(i => i.includes('-light') || i.includes('-dark'))
    .map(i => i.split('-')[0]),
];

const ICONS_PER_LINE = 15;
const ONE_ICON = 48;
const SCALE = ONE_ICON / (300 - 44);
const CLICKABLE = false;

function generateSvg(iconNames, perLine) {
  const iconSvgList = iconNames.map(i => icons[i]);

  const length = Math.min(perLine * 300, iconNames.length * 300) - 44;
  const height = Math.ceil(iconSvgList.length / perLine) * 300 - 44;
  const scaledHeight = height * SCALE;
  const scaledWidth = length * SCALE;

  return `
  <svg width="${scaledWidth}" height="${scaledHeight}" viewBox="0 0 ${length} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    ${iconSvgList
      .map(
        (i, index) =>
          `
        <g transform="translate(${(index % perLine) * 300}, ${Math.floor(index / perLine) * 300
          })">
          ${i}
        </g>
        `
      )
      .join(' ')}
  </svg>
  `;
}

function generateText(iconNames) {
  let renderedText = "";
  iconNames.split(",").forEach(element => {
    renderedText += `<a href="${urlMaps[element]}"><img src="https://skillicons.dev/icons?i=${element}" /></a> `;
  });
  return renderedText;
}

function parseShortNames(names, theme = 'dark') {
  return names.map(name => {
    if (iconNameList.includes(name))
      return name + (themedIcons.includes(name) ? `-${theme}` : '');
    else if (name in shortNames)
      return (
        shortNames[name] +
        (themedIcons.includes(shortNames[name]) ? `-${theme}` : '')
      );
  });
}

async function handleRequest(request) {
  const { pathname, searchParams } = new URL(request.url);

  const path = pathname.replace(/^\/|\/$/g, '');

  if (path === 'icons') {
    const iconParam = searchParams.get('i') || searchParams.get('icons');
    if (!iconParam)
      return new Response("You didn't specify any icons!", { status: 400 });
    const theme = searchParams.get('t') || searchParams.get('theme');
    if (theme && theme !== 'dark' && theme !== 'light')
      return new Response('Theme must be either "light" or "dark"', {
        status: 400,
      });
    const perLine = searchParams.get('perline') || ICONS_PER_LINE;
    if (isNaN(perLine) || perLine < -1 || perLine > 50)
      return new Response('Icons per line must be a number between 1 and 50', {
        status: 400,
      });

    let iconShortNames = [];
    if (iconParam === 'all') iconShortNames = iconNameList;
    else iconShortNames = iconParam.split(',');

    const iconNames = parseShortNames(iconShortNames, theme || undefined);
    if (!iconNames)
      return new Response("You didn't format the icons param correctly!", {
        status: 400,
      });

    const clickable = searchParams.get('clickable') || CLICKABLE;
    if (clickable) {
      const text = generateText(iconsNames);
      return new Response(JSON.stringify({ text }), {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });
    }
    else {
      const svg = generateSvg(iconNames, perLine);
      return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
    }
  } else if (path === 'api/icons') {
    return new Response(JSON.stringify(iconNameList), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  } else if (path === 'api/svgs') {
    return new Response(JSON.stringify(icons), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  } else {
    return fetch(request);
  }
}

addEventListener('fetch', event => {
  event.respondWith(
    handleRequest(event.request).catch(
      err => new Response(err.stack, { status: 500 })
    )
  );
});
