const Pet = require("../models/pet-model");

const getPets = async (req, res) => {
  const pets = await Pet.find();

  res.status(200).json({
    status: "success",
    count: pets.length,
    data: {
      pets,
    },
  });
};

const getPetById = async (req, res) => {
  const pet = await Pet.findById(req.params.id);

  if (!pet) {
    return res.status(404).json({
      status: "fail",
      message: "Pet not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      pet,
    },
  });
};

const createPet = async (req, res) => {
  const pet = await Pet.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      pet,
    },
  });
};

const updatePet = async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: "after",
      runValidators: true,
    }
  );

  if (!pet) {
    return res.status(404).json({
      status: "fail",
      message: "Pet not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      pet,
    },
  });
};

const deletePet = async (req, res) => {
  const pet = await Pet.findByIdAndDelete(req.params.id);

  if (!pet) {
    return res.status(404).json({
      status: "fail",
      message: "Pet not found",
    });
  }

  res.status(204).send();
};

module.exports = {
  getPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
};