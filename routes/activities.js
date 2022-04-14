import { Router } from "express";
import * as controllers from "../controllers/activities.js";

const router = Router();

router.get("/activities", controllers.getActivities);
router.get("/activities/:id", controllers.getActivity);
router.post("/activities", controllers.createActivity);
router.put("/activities/:id", controllers.updateActivity);
router.delete("/activities/:id", controllers.deleteActivity);

export default router;
