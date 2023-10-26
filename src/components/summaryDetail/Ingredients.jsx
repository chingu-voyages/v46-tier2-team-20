import { nanoid } from 'nanoid';

export default function Ingredients({ sections }) {
  const ingredientEls = sections.map((section) => section.components.map((component) => (<p key={nanoid()}>{component.raw_text}</p>)));

  return (
    <>
      {ingredientEls}
    </>
  );
}
