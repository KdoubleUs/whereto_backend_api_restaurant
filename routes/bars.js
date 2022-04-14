import { Router } from "express";
import * as controllers from "../controllers/bars.js";

const router = Router();

router.get("/bars", controllers.getBars);
router.get("/bars/:id", controllers.getBar);
router.post("/bars", controllers.createBar);
router.put("/bars/:id", controllers.updateBar);
router.delete("/bars/:id", controllers.deleteBar);

export default router;
