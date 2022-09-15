import Pokemon from "@app/Pokemon/domain/entities/pokemon";
import getPokemonDetail from "@app/Pokemon/domain/useCases/getPokemonDetail";
import { QueryKeys } from "@app/Pokemon/infractucture/types/QueryKeys";
import { useQuery, UseQueryResult } from "react-query";

export function useGetPokemonDetail(
  name: string,
): UseQueryResult<Pokemon, Error> {
  const queryKey = `${QueryKeys.find}-${name}`;
  return useQuery<Pokemon, Error>(
    [queryKey],
    () => {
      return getPokemonDetail(name);
    },
    {
      initialData: undefined,
    },
  );
}
