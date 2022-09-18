import getPokemonByName from "@app/Pokemon/infractucture/repositories/getPokemonByName";

export default async function getPokemonDetail(name: string) {
  return getPokemonByName(name);
}
