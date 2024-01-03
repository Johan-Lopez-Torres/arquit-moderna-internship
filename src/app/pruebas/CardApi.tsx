"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

type CharacterProps = {
  id: number;
  name: string;
  image: string;
  alt: string;
};

export const CardRickMorty = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [page, setPage] = useState(1);

  async function getCharacters() {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}` );
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <>
      <div>
        <button className="btn btn-success" onClick={() => setPage(page -1)}>{page - 1} </button>
        <button className="btn btn-warning" onClick={() => setPage(page + 1)}>
          {page}{" "}
        </button>
        <button className="btn btn-primary"></button>

      </div>
      {characters.map(({ name, id, image }) => {
        return <Card key={id} name={name} id={id} imgUrl={image} alt={name} />;
      })}
    </>
  );
};
