import "./BackgroundBlur.css"

export default function backgroundBlur({handleSummaryDetailClose}) {
  return (
    <div className="bg-blur absolute top-0 left-0 h-full w-full" onClick={handleSummaryDetailClose}>
    </div>
  );
}