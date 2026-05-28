import clsx from "clsx";
import { Link } from "react-router";

const validCategory = ["all", "men", "women", "electronics", "jewelry"];
interface Props {
  category?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function Options({category, onChange}: Props) {
  let cat: string;
  if (category && validCategory.includes(category)) {
    cat = category;
  } else {
    cat = "all";
  }

  function getClass(to: string): string {
    if (to === cat) {
      return "bg-black text-background border-none";
    } else {
      return "";
    }
  }

  return (
    <div className="flex items-center mt-3">
      <div className="flex flex-wrap gap-3">
        {validCategory.map((category) => {
          const capitalized = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
          return <Link to={`/${category}`} className={clsx("rounded-2xl px-3 border border-gray-400 transition-colors duration-300", getClass(category))}>{capitalized}</Link>
        })}
      </div>

      <select className="ml-auto px-3 py-2 border border-gray-400 rounded-[10px]" onChange={onChange}>
        <option value="" disabled selected>Sort by: Choose</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="top">Top Rated</option>
      </select>
    </div>
  );
}
