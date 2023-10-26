import { nanoid } from 'nanoid';

export default function Nutrition({ nutrition }) {
  let nutritionEls = null;

  function capitalize(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }

  if (Object.keys(nutrition).length === 0) {
    return nutritionEls = null;
  }
  nutritionEls = Object.entries(nutrition)
    .filter(([key, value]) => key !== 'updated_at')
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => (
      <p key={nanoid()} className="border-t text-xs">
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
