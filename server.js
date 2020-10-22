const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

const posts = [
  {
    id: "1234",
    title: "My first post",
    imgURL:
      "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    content: "This is a cat",
    author: "Kyle Thousand",
  },
  {
    id: "5678",
    title: "My Second Post",
    imgURL:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    content: "This cat kind of looks like my cat.",
    author: "Kyle Thousand",
  },
];

app.get("/", (req, res) => {
  res.send("This is the root!");
});

app.get("/posts", async (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const post = posts.filter((post) => post.id === id)[0];
  res.json(post);
});

app.post("/posts", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.json(products);
});

app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const postIndex = posts.findIndex((post) => post.id === id);
  const post = { ...posts[postIndex], ...req.body };
  posts.splice(postIndex, 1, post);
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const postIndex = posts.findIndex((post) => post.id === id);
  posts.splice(postIndex, 1);
  res.json(posts);
});
