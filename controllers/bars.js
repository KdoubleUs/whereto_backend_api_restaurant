import bar from "../models/bar.js";

export const getBars = async (req, res) => {
  try {
    const bars = await bar.find();
    res.json(bars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getBar = async (req, res) => {
  try {
    const { id } = req.params;
    const bars = await bar.findById(id);

    if (bars) {
      return res.json(bars);
    }

    res.status(400).json({ message: "bar not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createBar = async (req, res) => {
  try {
    const bar = new bar(req.body);
    await bar.save();
    res.status(201).json(bar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateBar = async (req, res) => {
  const { id } = req.params;
  const bar = await bar.findByIdAndUpdate(id, req.body);
  res.status(200).json(bar);
};

export const deleteBar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await bar.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("bar deleted!");
    }

    throw new Error("bar not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
