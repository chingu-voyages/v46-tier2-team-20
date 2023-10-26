import { nanoid } from 'nanoid';

export default function SummaryDetail({ recipeDetail }) {
  const {
    name, thumbnail_url: thumbnailUrl, video_url: videoUrl, nutrition, instructions, sections, tags,
  } = recipeDetail;

  // Ingredients
  const ingredientEls = sections.map((section) => section.components.map((component) => (<p key={nanoid()}>{component.raw_text }</p>)));

  // Nutrition
  let nutritionEls = null;
  if (Object.keys(nutrition).length === 0) {
    return nutritionEls = null;
  }
  nutritionEls = Object.entries(nutrition)
    .filter(([key, value]) => key !== 'updated_at')
    .map(([key, value]) => (
      <p key={key}>
        {key}
        {': '}
        {value}
      </p>
    ));

  // Instructions
  const instructionEls = instructions.map((instruction) => (<p key={nanoid()}>{instruction.display_text }</p>));

  return (
    <>
      <h2>{name}</h2>
      <h3>Ingredients</h3>
      {ingredientEls}
      <h3>Nutrition</h3>
      {nutritionEls}
      <h3>Instructions</h3>
      {instructionEls}
    </>
  );
}
