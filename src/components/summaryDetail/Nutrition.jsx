export default function Nutrition({ recipeId, nutrition }) {
  let nutritionEls = null;

  function capitalize(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }

  if (Object.keys(nutrition).length === 0) {
    return nutritionEls = <p text-xs>No nutrition data available</p>;
  }
  nutritionEls = Object.entries(nutrition)
    .filter(([key, value]) => key !== 'updated_at')
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => (
      <p key={recipeId + capitalize(key)} className="border-t text-xs">
        {capitalize(key)}
        {': '}
        {value}
      </p>
    ));

  return (
    <>
      {nutritionEls}
    </>
  );
}