import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import Instructions from './Instructions';
import Categories from './Categories';

export default function SummaryDetail({ recipeDetail, toggleIsDetailShown }) {
  const {
    name, thumbnail_url: thumbnailUrl, video_url: videoUrl, nutrition, instructions, sections, tags,
  } = recipeDetail;

  return (
    <>
      <button onClick={toggleIsDetailShown}>X</button>
      <img src={thumbnailUrl} />
      <h2>{name}</h2>
      <div className="flex">
        <div>
          <h3>Ingredients</h3>
          <Ingredients
            sections={sections}
          />
        </div>
        <div>
          <h3>Nutrition</h3>
          <Nutrition
            nutrition={nutrition}
          />
        </div>
      </div>
      <h3>Instructions</h3>
      <Instructions
        instructions={instructions}
      />
      <h4>Categories</h4>
      <Categories
        tags={tags}
      />
    </>
  );
}
