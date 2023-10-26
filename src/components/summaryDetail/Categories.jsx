import { nanoid } from 'nanoid';

export default function Categories({ tags }) {
  // Categories
  const categoryEls = tags
    .filter((tag) => tag.type === 'dietary' || tag.type === 'meal' || tag.type === 'difficulty')
    .map((tag) => (<p key={nanoid()}>{tag.display_name}</p>));

  return (
    <>
      {categoryEls}
    </>
  );
}
