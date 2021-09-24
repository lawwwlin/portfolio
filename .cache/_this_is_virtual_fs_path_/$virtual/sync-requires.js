
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/mnt/c/Users/lawbr/lighthouse/lawrence-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/mnt/c/Users/lawbr/lighthouse/lawrence-portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/mnt/c/Users/lawbr/lighthouse/lawrence-portfolio/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/c/Users/lawbr/lighthouse/lawrence-portfolio/src/pages/index.js"))
}

