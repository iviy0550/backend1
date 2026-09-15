const express = require("express");

const app = express();

app.use(express.json());

let pets = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog"
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat"
  },
  {
    id: 3,
    name: "Snow",
    type: "Rabbit"
  }
];

app.get("/", (req, res) => {
  res.send("Pet Adoption API is running");
});

app.get("/api/v1/pets", (req, res) => {
  res.json(pets);
});

app.get("/api/v1/pets/:id", (req, res) => {
  const pet = pets.find(
    (p) => p.id === Number(req.params.id)
  );

  if (!pet) {
    return res.status(404).send("Pet not found");
  }

  res.json(pet);
});

app.post("/api/v1/pets", (req, res) => {
  const newPet = {
    id: pets.length + 1,
    name: req.body.name,
    type: req.body.type
  };

  pets.push(newPet);

  res.status(201).json(newPet);
});

app.put("/api/v1/pets/:id", (req, res) => {
  const pet = pets.find(
    (p) => p.id === Number(req.params.id)
  );

  if (!pet) {
    return res.status(404).send("Pet not found");
  }

  pet.name = req.body.name;
  pet.type = req.body.type;

  res.json(pet);
});

app.delete("/api/v1/pets/:id", (req, res) => {
  pets = pets.filter(
    (p) => p.id !== Number(req.params.id)
  );

  res.status(204).send();
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});