import app from "./src/app.js";
import * as dotenv from "dotenv";
import conexionDB from "./src/utils/conexionDB.js";
dotenv.config();

const port = process.env.PORT || 3002;

app.listen(port, () => {
  conexionDB();
  console.log("Corriendo server en el puerto " + port);
});
