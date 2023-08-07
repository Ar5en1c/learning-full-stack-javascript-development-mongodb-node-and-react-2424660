import express from "express";

const server = express();
const port = 8080;

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
    res.render("index", {
        content: "EJS is cool!</br><em>Right?</em>"
    });
});

server.listen(port, "localhost", () => {
    console.info(`Server is running on http://localhost:${port}`);
});