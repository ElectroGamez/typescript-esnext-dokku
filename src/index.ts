import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_res, req) => {
    req.send("Hello World!");
});

app.listen(5000, () => console.log("Running on " + 5000));
