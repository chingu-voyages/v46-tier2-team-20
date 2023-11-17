export default function Ingredients({ recipeId, sections }) {
  const ingredientEls = sections.map((section) => section.components.map((component) => (
    <li key={recipeId + component.id} className="pb-2 text-xs">
      &#8226;
      {' '}
      {component.raw_text}
    </li>
  )));
  return (
    <div className="rounded-2xl py-5 px-4 bg-[#EBE3E0]">
      <ul>
        {ingredientEls}
      </ul>
    </div>
  );
}
