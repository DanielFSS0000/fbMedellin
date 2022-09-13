import express from "express";
import router from "./routes.js";
const app = express();

app.get("/", (req, res) => {
  res.send({
    title: "ok",
    message: "hola mundo",
  });
});

app.use(express.json());
app.use("/api/v1", router);

export default app;
