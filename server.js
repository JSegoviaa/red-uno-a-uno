// const { createServer } = require('http')
// const next = require('next')

// const isDevMode = process.env.NODE_ENV !== 'production'
// const port = process.env.PORT ? process.env.PORT : 3000

// const nextjsApp = next({ dev: isDevMode })
// const nextjsRequestHandler = nextjsApp.getRequestHandler()

// nextjsApp
//   .prepare()
//   .then(() => {
//     createServer((req, res) => {
//       // The request url likely will not include a protocol or host, therefore
//       // resolve the request url against a dummy base url.
//       const url = new URL(req.url, "http://w.w")
//       nextjsRequestHandler(req, res, url)
//     }).listen(port, (err) => {
//       if (err) throw err
//     })
//   })
//   .catch((ex) => {
//     console.error(ex.stack)
//     process.exit(1)
//   })
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
