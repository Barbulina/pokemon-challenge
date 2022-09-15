import Pokemon from "@app/Pokemon/domain/entities/pokemon";

export default function restorePokemon({
  id = 0,
  name = "",
  height = 0,
  location_area_encounters = "",
  order = 0,
}: {
  id: number;
  name: string;
  height: number;
  location_area_encounters: string;
  order: number;
}) {
  return new Pokemon({
    id: id,
    name: name,
    height: height,
    location_area_encounters: location_area_encounters,
    order: order,
  });
}
