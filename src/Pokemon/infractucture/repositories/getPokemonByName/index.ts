import http from "@app/common/infrastructure/http/api";
import Pokemon from "@app/Pokemon/domain/entities/pokemon";
import restorePokemon from "@app/Pokemon/infractucture/builders/restorePokemon";
import { urlKeys } from "@app/Pokemon/infractucture/types/UrlKeyts";

export default async function getPokemonByName(name: string): Promise<Pokemon> {
  const url = `${urlKeys.find}/${name}`;
  const data = (await http.get(url)).data;
  const pokemon = restorePokemon(data);
  return pokemon;
}
