import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function fetchPlanets() {
  "use server";
  const data = await client.query({
    query: gql`
      query ExampleQuery {
        characters {
          results {
            name
            image
          }
        }
      }
    `,
  });
  return data;
}

export default async function Page() {
  const { data } = await fetchPlanets();
  return (
    <>
      <div>Planets data</div>
      {data.characters.results.map((character) => (
        <div>
          <div>{character.name}</div>
          <img src={character.image} />
        </div>
      ))}
    </>
  );
}
