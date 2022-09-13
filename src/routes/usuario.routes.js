import { Router } from "express";
import {
  getUser,
  delUser,
  insertUser,
  putUser,
} from "../controllers/usuario.controller.js";
const router = Router();

router
  .get("/:id?", getUser)
  .post("/", insertUser)
  .put("/:id", putUser)
  .delete("/:id", delUser);

export default router;
