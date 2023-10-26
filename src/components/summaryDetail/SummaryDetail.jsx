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
    <div className="max-h-screen overflow-y-scroll inline-flex flex-col items-center">

      <button onClick={handleSummaryDetailClose} className="self-end w-4 h-4 bg-gray-700 rounded-full p-4 text-white inline-flex items-center justify-center">X</button>

      <div className="h-1/4">
        <img src={thumbnailUrl} className="object-cover" />
      </div>

      <div className="w-9/10">

        <h2 className="self-start py-10 border-b-2 border-grey-300 text-3xl font-semibold">{name}</h2>

        <div className="flex py-10">
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
        <Categories
          tags={tags}
        />

      </div>

    </div>
  );
}
