import * as mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    identifier: { type: String, required: true },
    species_id: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    base_experience: { type: Number, required: true },
    order: { type: Number, required: true },
    is_default: { type: Number, required: true },
  },
  {
    methods: {
      speak() {
        console.log(`My name is ${this.identifier}!`);
      },
    },
  }
);

export type Pokemon = mongoose.InferSchemaType<typeof pokemonSchema>;
export const Pokemon = mongoose.model("Pokemon", pokemonSchema);
