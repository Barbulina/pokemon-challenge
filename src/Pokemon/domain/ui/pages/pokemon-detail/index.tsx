import { useGetPokemonDetail } from "@app/Pokemon/infractucture/hooks/useGetPokemonDetail";
import Link from "next/link";
import Router from "next/router";
import React from "react";

export default function PokemonDetail() {
  const { name } = Router.query;
  const { data: pokemon } = useGetPokemonDetail(name as string);

  return (
    <>
      <Link href={"/pokemon"}>back</Link>
      <div>Pokemon Name : {pokemon?.name}</div>
      <div>Height: {pokemon?.height}</div>
    </>
  );
}
