import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h1>Name:{props.chars.name}</h1>
      <img src={props.chars.image} alt="rick and morty" />
    </div>
  );
}