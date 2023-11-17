export default function Instructions({ recipeId, instructions }) {
  const instructionEls = instructions.map((instruction, index) => (
    <p key={recipeId + instruction.id} className="py-4 text-xs">
      {index + 1}
      {'. '}
      {instruction.display_text}
    </p>
  ));

  return (
    <>
      {instructionEls}
    </>
  );
}
