import http from "@app/common/infrastructure/http/api";
import PokemonItemList from "@app/Pokemon/domain/entities/pokemonItemList";
import restorePokemonItemList from "@app/Pokemon/infractucture/builders/restorePokemonItemList";
import { urlKeys } from "@app/Pokemon/infractucture/types/UrlKeyts";

export default async function getPokemons(): Promise<PokemonItemList[]> {
  const url = urlKeys.find;
  const data = (await http.get(url)).data.results;
  const pokemons = data.map(restorePokemonItemList);
  return pokemons;
}
