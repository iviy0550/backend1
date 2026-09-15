const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet name is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Pet type is required"],
      enum: ["Dog", "Cat", "Rabbit"],
    },
    breed: {
      type: String,
      required: [true, "Pet breed is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Pet age is required"],
      min: [0, "Age cannot be negative"],
    },
    gender: {
      type: String,
      required: [true, "Pet gender is required"],
      enum: ["Male", "Female"],
    },
    location: {
      type: String,
      required: [true, "Pet location is required"],
      trim: true,
    },
    personality: {
      type: String,
      trim: true,
    },
    vaccinationStatus: {
      type: String,
      trim: true,
    },
    medicalHistory: {
      type: String,
      trim: true,
    },
    adoptedBefore: {
      type: Boolean,
      default: false,
    },
    previousAdoption: {
      type: String,
      trim: true,
    },
    fullHistory: {
      type: String,
      trim: true,
    },
    adoptionStatus: {
      type: String,
      default: "Available",
      enum: ["Available", "Adopted"],
    },
    imageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;