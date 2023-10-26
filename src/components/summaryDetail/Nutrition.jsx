import { nanoid } from 'nanoid';

export default function Nutrition({ nutrition }) {
  let nutritionEls = null;
  if (Object.keys(nutrition).length === 0) {
    return nutritionEls = null;
  }
  nutritionEls = Object.entries(nutrition)
    .filter(([key, value]) => key !== 'updated_at')
    .map(([key, value]) => (
      <p key={nanoid()} className="text-xs">
        {key}
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
