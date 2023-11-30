const pokemonCSV = Bun.file("./data/pokemon.csv");

const stream = pokemonCSV.stream();

const csvString = await Bun.readableStreamToText(stream).then((text) =>
  text.split("\n")
);

let json = {} as any;

for (let i = 1; i < csvString.length - 1; i++) {
  let row = csvString[i].split(",");
  json[i] = {
    id: row[0],
    identifier: row[1],
    species_id: row[2],
    height: row[3],
    weight: row[4],
    base_experience: row[5],
    order: row[6],
    is_default: row[7],
  };
}

await Bun.write("./data/pokemon.json", JSON.stringify(json));
