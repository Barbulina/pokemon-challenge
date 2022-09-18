import { useGetPokemonDetail } from "@app/Pokemon/infractucture/hooks/useGetPokemonDetail";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function PokemonDetail() {
  const { query } = useRouter();
  const { name } = query;
  const { data: pokemon } = useGetPokemonDetail(name as string);
  if (!pokemon) return null;
  return (
    <>
      <Link href={"/pokemon"}>back</Link>
      <div>Pokemon Name : {pokemon?.name}</div>
      <div>Height: {pokemon?.height}</div>
      {pokemon?.image && (
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          layout="fixed"
          width={300}
          height={300}
        />
      )}
    </>
  );
}
