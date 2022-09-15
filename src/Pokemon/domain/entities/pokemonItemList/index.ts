type PokemonType = {
  name?: string;
  url?: string;
};
export default class PokemonItemList {
  readonly name: string;

  readonly url?: string;

  constructor({ name = "", url = "" }: PokemonType) {
    this.name = name;
    this.url = url;
  }
}
