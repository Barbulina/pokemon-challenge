import PokemonItemList from "@app/Pokemon/domain/entities/pokemonItemList";

export default function restorePokemonItemList({
  name = "",
}: {
  name: string;
}) {
  return new PokemonItemList({
    name: name,
  });
}
