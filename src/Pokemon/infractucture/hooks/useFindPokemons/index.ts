import PokemonItemList from "@app/Pokemon/domain/entities/pokemonItemList";
import findPokemons from "@app/Pokemon/domain/useCases/findPokemon";
import { QueryKeys } from "@app/Pokemon/infractucture/types/QueryKeys";
import { useQuery, UseQueryResult } from "react-query";

export function useFindPokemons(): UseQueryResult<PokemonItemList[], Error> {
  return useQuery<PokemonItemList[], Error>(
    [QueryKeys.find],
    () => {
      return findPokemons();
    },
    {
      initialData: [],
    },
  );
}
