import { nanoid } from 'nanoid';

export default function Categories({ tags }) {
  const categoryEls = tags
    .filter((tag) => tag.type === 'dietary' || tag.type === 'meal' || tag.type === 'difficulty')
    .map((tag) => (<p key={nanoid()} className="text-xs">{tag.display_name}</p>));

  return (
    <div className="mt-12 border-t-2 border-grey-300">
      {categoryEls}
    </div>
  );
}
