import client from "../../../apollo-client";
import { gql } from "@apollo/client";
import React from "react";
import { ICharacter } from "../page";
async function fetchCharacter(id: string) {
  "use server";
  try {
    const data = await client.query({
      query: gql`
        query ExampleQuery($characterId: ID!) {
          character(id: $characterId) {
            id
            gender
            image
            location {
              id
              name
              dimension
            }
            name
            species
            status
          }
        }
      `,
      variables: {
        characterId: id,
      },
    });
    return data;
  } catch (e) {
    console.log("graphql error", e);
  }
}
export default async function CharacterPage({
  params,
}: {
  params: { character: string };
}) {
  const { data } = await fetchCharacter(params.character);
  return <div>{data.character.name}</div>;
}
