const Thing = require("../models/thingSchema");

const getThings = async (req, res) => {
  const things = await Thing.find();

  if (!things) {
    return res.status(404).json({
      message: "Things not found",
    });
  }
  res.status(200).json({
    message: "Get all things",
    data: things,
  });
};

const getThingById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({
      message: "Thing not found",
    });
  }
  const thingById = await Thing.findById(id);
  if (!thingById) {
    return res.status(404).json({
      message: "Thing not found",
    });
  }
  res.status(200).json({
    message: "Get thing by ID",
    data: thingById,
  });
};

const createThing = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      message: "Name field is required",
    });
  }
  const newThing = await Thing.create({ name });
  if (!newThing) {
    return res.status(500).json({
      message: "Failed to create thing",
    });
  }
  res.status(201).json({
    message: "Thing successfully created",
    data: newThing,
  });
};

const deleteThing = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({
      message: "Thing not found",
    });
  }
  const deletedThing = await Thing.findByIdAndDelete(id);
  if (!deletedThing) {
    return res.status(404).json({
      message: "Thing not found",
    });
  }
  res.status(200).json({
    message: "Thing successfully deleted",
    data: deletedThing,
  });
};

const updateThing = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!id || !name) {
    return res.status(400).json({
      message: "ID and name are required",
    });
  }
  const updatedThing = await Thing.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  );
  if (!updatedThing) {
    return res.status(404).json({
      message: "Thing not found",
    });
  }
  res.status(200).json({
    message: "Thing successfully updated",
    data: updatedThing,
  });
};

module.exports = {
  getThings,
  getThingById,
  createThing,
  deleteThing,
  updateThing,
};
