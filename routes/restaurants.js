import { Router } from "express";
import * as controllers from "../controllers/restaurants.js";

const router = Router();

router.get("/restaurants", controllers.getRestaurants);
router.get("/restaurants/:id", controllers.getRestaurant);
router.post("/restaurants", controllers.createRestaurant);
router.put("/restaurants/:id", controllers.updateRestaurant);
router.delete("/restaurants/:id", controllers.deleteRestaurant);

export default router;
