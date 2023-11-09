import { useState } from 'react';
import './SummaryDetail.css';
import { FiChevronUp, FiChevronDown, FiVideo } from 'react-icons/fi';

import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import Instructions from './Instructions';
import Categories from './Categories';

export default function SummaryDetail({
  recipeDetail, isDetailShown, handleSummaryDetailClose,
}) {
  const [isNutritionShown, setIsNutritionShown] = useState(false);

  const {
    name, id: recipeId, thumbnail_url: thumbnailUrl, original_video_url: videoUrl, nutrition, instructions, sections, tags,
  } = recipeDetail;

  function toggleNutrition() {
    setIsNutritionShown((prevIsNutritionShown) => !prevIsNutritionShown);
  }

  const containerStyle = {
    transform: isDetailShown ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 1s ease',
  };

  return (
    <>
      <button onClick={handleSummaryDetailClose} className="fixed top-4 right-4 w-4 h-4 bg-gray-700 rounded-full mr-4 p-4 text-white inline-flex items-center justify-center z-10" type="button">X</button>

      <div style={containerStyle} className="summary-detail-container fixed top-0 right-0 h-full bg-white max-h-screen overflow-y-scroll inline-flex flex-col items-center pb-4">

        <div className="recipe-detail-img h-1/3 w-full">
          <img src={thumbnailUrl} className="w-full max-h-full object-cover object-center" />
        </div>

        <div className="w-11/12 bg-pink">

          <h2 className="self-start py-10 border-b-2 border-grey-300 text-3xl font-semibold">{name}</h2>

          <div className="flex gap-20 max-w-11/12 py-10">
            <div>
              <h3 className="font-semibold pb-5">Ingredients</h3>
              <Ingredients
                recipeId={recipeId}
                sections={sections}
              />
            </div>
            <div>
              <div className="flex gap-4 items-center pb-5">
                <h3 className="font-semibold">Nutrition</h3>
                <button onClick={toggleNutrition} type="button">
                  {isNutritionShown
                    ? <FiChevronUp />
                    : <FiChevronDown />}
                </button>
              </div>
              {isNutritionShown
                && (
                <Nutrition
                  recipeId={recipeId}
                  nutrition={nutrition}
                />
                )}

            </div>
          </div>

          <h3 className="font-semibold">Instructions</h3>
          <Instructions
            recipeId={recipeId}
            instructions={instructions}
          />

          {videoUrl
            && (
            <a href={videoUrl} target="_blank" className="flex items-center gap-3 pt-10 text-xs" rel="noreferrer">
              <FiVideo />
              {' '}
              HOW TO VIDEO
            </a>
            )}

          <Categories
            tags={tags}
          />

        </div>

      </div>
    </>
  );
}
