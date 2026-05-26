import clsx from "clsx";
import { Link } from "react-router";

const validCategory = ["all", "men", "women", "electronics", "jewelry"];
interface Props {
  category?: string;
}
export default function Options({category}: Props) {
  let cat: string;
  if (category && validCategory.includes(category)) {
    cat = category;
  } else {
    cat = "all";
  }

  function getClass(to: string): string {
    if (to === cat) {
      return "bg-black text-background";
    } else {
      return "";
    }
  }

  return (
    <div className="flex items-center mt-3">
      <div className="flex gap-3">
        {validCategory.map((category) => {
          const capitalized = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
          return <Link to={`/${category}`} className={clsx("rounded-2xl px-2.5", getClass(category))}>{capitalized}</Link>
        })}
      </div>

      <select className="ml-auto px-3 py-2 border border-gray-400 rounded-[10px]">
        <option>Sort by: Choose</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Top Rated</option>
      </select>
    </div>
  );
}
