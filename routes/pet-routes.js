const express = require("express");

const petControllers = require("../controllers/pet-controllers");

const router = express.Router();

console.log("PET ROUTES LOADED");

router.get("/test", (req, res) => {
  res.send("Pet routes are working");
});

router
  .route("/")
  .get(petControllers.getPets)
  .post(petControllers.createPet);

router
  .route("/:id")
  .get(petControllers.getPetById)
  .patch(petControllers.updatePet)
  .delete(petControllers.deletePet);

module.exports = router;