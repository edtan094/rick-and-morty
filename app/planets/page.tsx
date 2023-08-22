import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function fetchPlanets() {
  "use server";
  const data = await client.query({
    query: gql`
      query allPlanets {
        allPlanets {
          planets {
            created
            diameter
            gravity
            name
          }
        }
      }
    `,
  });
  return data;
}

export default async function Page() {
  const planets = await fetchPlanets();
  return (
    <>
      <div>Planets data</div>
      {planets.data.allPlanets.planets.map((planet) => (
        <div>{planet.name}</div>
      ))}
    </>
  );
}
