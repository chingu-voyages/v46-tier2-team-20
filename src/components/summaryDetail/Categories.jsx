export default function Categories({ tags }) {
  const categoryList = tags
    .filter((tag) => (tag.type === 'dietary' || tag.type === 'meal' || tag.type === 'difficulty') && !['Meal', 'Dietary', 'Difficulty'].includes(tag.display_name))
    .map((tag) => tag.display_name)
    .join(', ');

  return (
    <div className="border-t-2 border-grey-300 pt-1">
      <p className="text-xs">{categoryList}</p>
    </div>
  );
}
