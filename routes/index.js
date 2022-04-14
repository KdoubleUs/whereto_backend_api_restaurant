import { Router } from "express";
import activitiesRoute from "./activities.js";
import barsRoute from "./bars.js";
import restaurantRoute from "./restaurants.js";
const router = Router();

router.get("/", (req, res) => res.send(`this is the api root`));
router.use("/", activitiesRoute);
router.use("/", barsRoute);
router.use("/", restaurantRoute);

export default router;
