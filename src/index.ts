import Express from "express";
import cors from "cors";
import path from "path";

const app = Express();

app.use(cors());

app.use(Express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(8000, () => {
  console.log("server start");
});
