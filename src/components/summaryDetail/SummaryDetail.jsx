import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import Instructions from './Instructions';
import Categories from './Categories';

export default function SummaryDetail({ recipeDetail }) {
  const {
    name, thumbnail_url: thumbnailUrl, video_url: videoUrl, nutrition, instructions, sections, tags,
  } = recipeDetail;

  return (
    <>
      <h2>{name}</h2>
      <h3>Ingredients</h3>
      <Ingredients
        sections={sections}
      />
      <h3>Nutrition</h3>
      <Nutrition
        nutrition={nutrition}
      />
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
