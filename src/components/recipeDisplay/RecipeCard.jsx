import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ recipes }) {
  return (
    <div className="recipe-brief-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12">
      {
        recipes && recipes.map((recipe) => {
          const { name, thumbnail_url: thumbnailUrl, id } = recipe;
          return (
            <div key={id} className="recipe-card relative ">
              <p className="recipe-name absolute bottom-0 left-0 p-4 text-white font-semibold ">{name}</p>
              <img src={thumbnailUrl} alt={name} className="recipe-img w-full h-auto rounded-xl" />
            </div>
          );
        })
      }
    </div>
  );
}
