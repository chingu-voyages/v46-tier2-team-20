import React from 'react';

export default function RecipesDisplay({ recipes }) {
  const data = recipes && recipes.map((recipe) => {
    const { name, thumbnail_url } = recipe;
    return (
      <div>
        <img src={thumbnail_url} />
        <h1>{name}</h1>
      </div>
    );
  });
  return data;
}
