import activity from "../models/activity.js";

export const getActivities = async (req, res) => {
  try {
    const activities = await activity.find();
    res.json(activities);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const activities = await activity.findById(id);

    if (activities) {
      return res.json(activities);
    }

    res.status(400).json({ message: "activity not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createActivity = async (req, res) => {
  try {
    const activity = new activity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await activity.findByIdAndUpdate(id, req.body);
  res.status(200).json(activity);
};

export const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await activity.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("activity deleted!");
    }

    throw new Error("activity not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
