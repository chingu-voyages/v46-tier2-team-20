export default function SummaryDetail(props) {
  return (
    <h1>
      I want to cook
      {' '}
      {props.recipeDetail.name}
    </h1>
  );
}
