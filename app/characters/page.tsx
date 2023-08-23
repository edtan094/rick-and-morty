import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Link from "next/link";

async function fetchPlanets() {
  "use server";
  const data = await client.query({
    query: gql`
      query Characters {
        characters {
          results {
            id
            image
            name
          }
        }
      }
    `,
  });
  return data;
}

export interface ICharacter {
  name: string;
  image: string;
  gender: string;
  id: string;
  species: string;
  status: string;
  location: {
    id: string;
    name: string;
    dimension: string;
  };
  origin: { id: string; name: string };
}

export default async function CharactersPage() {
  const { data } = await fetchPlanets();
  return (
    <>
      <div className="flex justify-center m-5">
        <h2>CHARACTERS</h2>
      </div>
      {data.characters.results.map((character: ICharacter) => {
        return (
          <div className="m-10" key={character.id}>
            <Link href={`/characters/${character.id}`}>
              <p className="text-xl">{character.name}</p>
              <img src={character.image} />
            </Link>
          </div>
        );
      })}
    </>
  );
}
