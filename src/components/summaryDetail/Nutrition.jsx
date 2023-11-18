import './SummaryDetail.css';

export default function Nutrition({ recipeId, nutrition }) {
  let nutritionEls = null;

  function capitalize(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }

  if (Object.keys(nutrition).length === 0) {
    return nutritionEls = <p className="text-xs">No nutrition data available</p>;
  }
  nutritionEls = Object.entries(nutrition)
    .filter(([key, value]) => key !== 'updated_at')
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => (
      <div className="nutrition-row border-t flex justify-between">
        <p key={recipeId + capitalize(key)} className="text-xs">
          {capitalize(key)}
        </p>
        <p className="text-xs">
          {value}
        </p>
      </div>

    ));

  return (
    <div className="nutrition-container">
      {nutritionEls}
    </div>
  );
}
