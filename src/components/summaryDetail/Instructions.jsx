import { nanoid } from 'nanoid';

export default function Instructions({ instructions }) {
  const instructionEls = instructions.map((instruction, index) => (
    <p key={nanoid()} className="pt-4 text-xs">
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
