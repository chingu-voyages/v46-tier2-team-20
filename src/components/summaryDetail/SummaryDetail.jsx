import { useState } from 'react';
import './SummaryDetail.css';
import {
  FiChevronUp, FiChevronDown, FiVideo,
} from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import Instructions from './Instructions';
import Categories from './Categories';

export default function SummaryDetail({
  recipeDetail, isDetailShown, handleSummaryDetailClose,
}) {
  const [isNutritionShown, setIsNutritionShown] = useState(false);

  let name; let recipeId; let thumbnailUrl; let videoUrl; let nutrition; let instructions; let sections; let
    tags;

  if (recipeDetail) {
    ({
      name, id: recipeId, thumbnail_url: thumbnailUrl, original_video_url: videoUrl, nutrition, instructions, sections, tags,
    } = recipeDetail);
  }

  const closeBtnStyles = {
    color: 'white', zIndex: 11, position: 'fixed', top: '1 rem', right: '1 rem',
  };

  const containerStyle = {
    transform: isDetailShown ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.6s ease',
  };

  function toggleNutrition() {
    setIsNutritionShown((prevIsNutritionShown) => !prevIsNutritionShown);
  }

  return (

    <>
      {recipeDetail && (
        <>
          <button onClick={handleSummaryDetailClose} className="close-btn self-end fixed top-4 right-1 w-4 h-4 bg-gray-700 rounded-full mr-4 p-4 text-white inline-flex items-center justify-center z-10" type="button">
            <AiOutlineClose style={closeBtnStyles} />
          </button>

          <div style={containerStyle} className="summary-detail-container fixed top-0 right-0 h-full bg-white max-h-screen overflow-y-scroll inline-flex flex-col items-center pb-4">

            <div className="recipe-detail-img h-1/3 w-full">
              <img src={thumbnailUrl} className="w-full max-h-full object-cover object-center" />
            </div>

            <div className="w-11/12">

              <h2 className="self-start py-7 border-b-2 border-grey-300 text-3xl font-semibold">{name}</h2>

              <div className="ingredients-and-nutrition-container flex max-w-11/12 py-7 ">

                <div className="ingredient-container">
                  <h3 className="font-semibold pb-5">Ingredients</h3>
                  <Ingredients
                    recipeId={recipeId}
                    sections={sections}
                  />
                </div>

                <div className="flex-grow">
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
      )}
    </>

  );
}
