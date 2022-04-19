import db from '../db/connection.js';
import restaurant from '../models/restaurant.js';
import bar from '../models/bar.js';
import activity from '../models/activity.js';
import restaurants from './restaurants.json' assert { type: 'json' };
import bars from './bars.json' assert { type: 'json' };
import activities from './activities.json' assert { type: 'json' };

const insertData = async () => {
  // reset database

  try {
    await restaurant.deleteMany();
    // insert restaurants into database
    await restaurant.insertMany(restaurants);
    console.log(`success`);
    // close db connection (done)
  } catch (err) {
    console.log(err);
  }
};
insertData();

const putData = async () => {
  try {
    await bar.deleteMany();
    await bar.insertMany(bars);
  } catch (error) {
    console.log(error);
  }
};
putData();
const slideData = async () => {
  try {
    await activity.deleteMany();
    await activity.insertMany(activities);
    db.close();
  } catch (error) {
    console.log(error);
  }
};

slideData();
