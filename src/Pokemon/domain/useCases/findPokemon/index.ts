import getPokemons from "@app/Pokemon/infractucture/repositories/getPokemons";

export default async function findPokemons() {
  return getPokemons();
}
