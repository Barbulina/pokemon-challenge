type PokemonType = {
  id: number;
  name: string;
  height: number;
  location_area_encounters: string;
  order: number;
  image: string;
};
export default class Pokemon {
  readonly id: number;
  readonly name: string;
  readonly height: number;
  readonly location_area_encounters: string;
  readonly order: number;
  readonly image: string;

  constructor({
    id = 0,
    name = "",
    height = 0,
    location_area_encounters = "",
    order = 0,
    image = "",
  }: PokemonType) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.location_area_encounters = location_area_encounters;
    this.order = order;
    this.image = image;
  }
}
