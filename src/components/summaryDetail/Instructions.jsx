import { nanoid } from 'nanoid';

export default function Instructions({ instructions }) {
  const instructionEls = instructions.map((instruction) => (<p key={nanoid()}>{instruction.display_text}</p>));

  return (
    <>
      {instructionEls}
    </>
  );
}