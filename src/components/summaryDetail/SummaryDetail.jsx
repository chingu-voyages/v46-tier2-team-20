import { useState } from 'react';
import './SummaryDetail.css';
import { FiChevronUp, FiChevronDown, FiVideo } from 'react-icons/fi';

import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import Instructions from './Instructions';
import Categories from './Categories';

export default function SummaryDetail({
  recipeDetail, setRecipeDetail, isDetailShown, toggleIsDetailShown, handleSummaryDetailClose,
}) {
  const [isNutritionShown, setIsNutritionShown] = useState(false);

  const {
    name, thumbnail_url: thumbnailUrl, video_url: videoUrl, nutrition, instructions, sections, tags,
  } = recipeDetail;

  function toggleNutrition() {
    setIsNutritionShown((prevIsNutritionShown) => !prevIsNutritionShown);
  }

  return (
    <div className={`${isDetailShown ? 'show-summary-detail' : 'hide-summary-detail'} fixed top-0 right-0 h-full max-w-2xl bg-white max-h-screen overflow-y-scroll inline-flex flex-col items-center pb-4`}>

      <button onClick={handleSummaryDetailClose} className="self-end fixed top-4 w-4 h-4 bg-gray-700 rounded-full mr-4 p-4 text-white inline-flex items-center justify-center">X</button>

      <div className="self-center h-1/4">
        <img src={thumbnailUrl} className="object-fit position-center max-h-full" />
      </div>

      <div className="w-11/12 bg-pink">

        <h2 className="self-start py-10 border-b-2 border-grey-300 text-3xl font-semibold">{name}</h2>

        <div className="flex gap-20 max-w-11/12 py-10">
          <div>
            <h3 className="font-semibold pb-5">Ingredients</h3>
            <Ingredients
              sections={sections}
            />
          </div>
          <div>
            <div className="flex gap-4 items-center pb-5">
              <h3 className="font-semibold">Nutrition</h3>
              <button onClick={toggleNutrition}>
                {isNutritionShown
                  ? <FiChevronUp />
                  : <FiChevronDown />}
              </button>
            </div>
            {isNutritionShown
              && <Nutrition nutrition={nutrition} />}

          </div>
        </div>

        <h3 className="font-semibold">Instructions</h3>
        <Instructions
          instructions={instructions}
        />

        <a href={videoUrl} className="flex items-center gap-3 py-10 text-xs">
          <FiVideo />
          {' '}
          HOW TO VIDEO
        </a>

        <Categories
          tags={tags}
        />

      </div>

    </div>
  );
}
