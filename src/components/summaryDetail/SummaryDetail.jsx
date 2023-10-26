import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import Instructions from './Instructions';
import Categories from './Categories';

export default function SummaryDetail({ recipeDetail, setRecipeDetail, toggleIsDetailShown }) {
  const {
    name, thumbnail_url: thumbnailUrl, video_url: videoUrl, nutrition, instructions, sections, tags,
  } = recipeDetail;

  function handleSummaryDetailClose() {
    toggleIsDetailShown();
    setRecipeDetail(null);
  }

  return (
    <div className="max-h-screen overflow-y-scroll">
      <button onClick={handleSummaryDetailClose} className="w-4 h-4 bg-gray-700 rounded-full p-4 text-white inline-flex items-center justify-center">X</button>

      <div className="h-1/4">
        <img src={thumbnailUrl} className="object-cover" />
      </div>

      <h2 className="text-3xl font-semibold">{name}</h2>
      <div className="flex">
        <div>
          <h3 className="font-semibold">Ingredients</h3>
          <Ingredients
            sections={sections}
          />
        </div>
        <div>
          <h3 className="font-semibold">Nutrition</h3>
          <Nutrition
            nutrition={nutrition}
          />
        </div>
      </div>
      <h3 className="font-semibold">Instructions</h3>
      <Instructions
        instructions={instructions}
      />
      <h4>Categories</h4>
      <Categories
        tags={tags}
      />
    </div>
  );
}
