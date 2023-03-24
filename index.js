const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.post("/submit", (req, res) => {
  // Here you can add your code to process the form data
  res.send("Form submitted successfully!");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// Custom 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
