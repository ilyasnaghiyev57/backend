const express = require("express");
const {
  getThings,
  createThing,
  deleteThing,
  updateThing,
  getThingById,
} = require("../controllers/thingsController");

const router = express.Router();

router.get("/", getThings).post("/", createThing);
router
  .delete("/:id", deleteThing)
  .get("/:id", getThingById)
  .put("/:id", updateThing);

module.exports = router;
