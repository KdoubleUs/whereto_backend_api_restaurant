import { Router } from "express";
import { append } from "express/lib/response";
import activitiesRoute from "./activities";
import barsRoute from "./bars";
import restaurantRoute from "./restaurants";
const router = Router();

router.get("/", res.send(`this is the api root`));
router.use("/", activitiesRoute);
router.use("/", barsRoute);
router.use("/", restaurantRoute);

export default router;
