import { nanoid } from 'nanoid';

export default function Nutrition({ nutrition }) {
  // Nutrition
  let nutritionEls = null;
  if (Object.keys(nutrition).length === 0) {
    return nutritionEls = null;
  }
  nutritionEls = Object.entries(nutrition)
    .filter(([key, value]) => key !== 'updated_at')
    .map(([key, value]) => (
      <p key={nanoid()}>
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
