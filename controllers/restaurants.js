import restaurant from "../models/restaurant.js";

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurants = await restaurant.findById(id);
    if (restaurants) {
      return res.json(restaurants);
    }

    res.status(400).json({ message: "restaurant not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createRestaurant = async (req, res) => {
  try {
    const restaurants = new restaurant(req.body);
    await restaurants.save();
    res.status(201).json(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const restaurant = await restaurant.findByIdAndUpdate(id, req.body);
  res.status(200).json(restaurant);
};

export const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await restaurant.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("restaurant deleted!");
    }

    throw new Error("restaurant not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
