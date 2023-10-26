import { nanoid } from 'nanoid';

export default function Ingredients({ sections }) {
  const ingredientEls = sections.map((section) => section.components.map((component) => (<p key={nanoid()} className="pb-2 text-xs">{component.raw_text}</p>)));

  return (
    <div className="rounded-2xl py-5 px-4 bg-gray-100">
      {ingredientEls}
    </div>
  );
}
