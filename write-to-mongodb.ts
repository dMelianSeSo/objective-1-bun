import mongoose from "mongoose";
import pokemon from "./data/pokemon.json";
import { Pokemon } from "./schema";

await mongoose.connect("mongodb://localhost:27017/pokemon-json");
console.log(mongoose.connection.readyState);

for (let i = 1; i < Object.keys(pokemon).length; i++) {
  const pokemonInstance = new Pokemon(pokemon[i]);
  await pokemonInstance.save();
}

const pokemonFromDB = await Pokemon.find({ identifier: "bulbasaur" });
pokemonFromDB[0].speak();

await mongoose.disconnect();
