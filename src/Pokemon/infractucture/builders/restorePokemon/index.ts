import Pokemon from "@app/Pokemon/domain/entities/pokemon";

interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}
interface Generationi {
  "red-blue": Redblue;
  yellow: Redblue;
}

interface Fireredleafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Officialartwork {
  front_default: string;
}

interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Dreamworld {
  front_default: string;
  front_female?: any;
}

interface Diamondpearl {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Generationiii {
  emerald: Emerald;
  "firered-leafgreen": Fireredleafgreen;
  "ruby-sapphire": Fireredleafgreen;
}
interface Ability {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Generationviii {
  icons: Dreamworld;
}

interface Generationvii {
  icons: Dreamworld;
  "ultra-sun-ultra-moon": Home;
}

interface Generationvi {
  "omegaruby-alphasapphire": Home;
  "x-y": Home;
}

interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Generationiv {
  "diamond-pearl": Diamondpearl;
  "heartgold-soulsilver": Diamondpearl;
  platinum: Diamondpearl;
}

interface Generationv {
  "black-white": Blackwhite;
}

interface Versions {
  "generation-i": Generationi;
  "generation-ii": Generationii;
  "generation-iii": Generationiii;
  "generation-iv": Generationiv;
  "generation-v": Generationv;
  "generation-vi": Generationvi;
  "generation-vii": Generationvii;
  "generation-viii": Generationviii;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  "official-artwork": Officialartwork;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: Versions;
}

interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Gameindex {
  game_index: number;
  version: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface entryPokemon {
  abilities: Ability2[];
  base_experience: number;
  forms: Ability[];
  game_indices: Gameindex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export default function restorePokemon({
  id = 0,
  name = "",
  height = 0,
  location_area_encounters = "",
  order = 0,
  sprites,
}: entryPokemon) {
  return new Pokemon({
    id: id,
    name: name,
    height: height,
    location_area_encounters: location_area_encounters,
    order: order,
    image: sprites.front_default,
  });
}
