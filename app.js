const express = require("express");

const app = express();

// listen for requests

//infers we want localhost
app.listen(3000);

app.get("/", (req, res) => {
  // infers the type of contnet we're sending
  // and sets Content-Type & statusCode for us
  //   res.send(`<h2>Home Express Test</h2>`);

  // by default Express looks for an absolute path, so if we add a relative path, we add a second arguement which is a path to the root (i.e. the root is what the path is RELATIVE to)
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  // res.send(`<h2>About Express Test</h2>`);
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404
// use function fires for every request the server makes, but will only run if it reaches that point (i.e. reaches an error)
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
