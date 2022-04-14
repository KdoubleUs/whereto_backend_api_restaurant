import db from "../db/connection.js";
import restaurant from "../models/restaurant.js";
import bar from "../models/bar.js";
import activity from "../models/activity.js";
import restaurants from "./restaurants.json" assert { type: "json" };
import bars from "./bars.json" assert { type: "json" };
import activities from "./activities.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert restaurants into database
  await restaurant.insertMany(restaurants);

  // insert bars into database
  await bar.insertMany(bars);

  // insert bars into database
  await activity.insertMany(activities);

  // close db connection (done)
  db.close();
};

insertData();
