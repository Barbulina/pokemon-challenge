import { useFindPokemons } from "@app/Pokemon/infractucture/hooks/useFindPokemons";
import Link from "next/link";

export default function Pokemons() {
  const { data: pokemons } = useFindPokemons();

  return (
    <ul>
      {pokemons?.map((pokemon) => (
        <li key={pokemon.name}>
          <Link key={pokemon.name} href={`pokemon/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
