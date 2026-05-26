import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import SearchBar from "../features/SearchBar";
import Hamburger from "../features/Hamburger";

const validCategory = ["all", "men", "women", "jewelry", "electronics"];
interface Props {
  category?: string;
}

export default function Header({ category }: Props) {
  let cat: string;
  if (category && validCategory.includes(category)) {
    cat = category;
  } else {
    cat = "all";
  }

  function getClass(to: string): string {
    if (to === cat) {
      return "underline";
    } else {
      return "";
    }
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="hidden md:flex md:pt-2 md:mx-1">
          <Link to="/" className="text-primary font-extrabold">
            VON
          </Link>
          <div className="mx-auto flex gap-1.5">
            <Link to="/" className={getClass("all")}>
              Shop all
            </Link>
            <Link to="/men" className={getClass("men")}>
              Men
            </Link>
            <Link to="/women" className={getClass("women")}>
              Women
            </Link>
            <Link to="/electronics" className={getClass("electronics")}>
              Electronics
            </Link>
            <Link to="/jewelry" className={getClass("jewelry")}>
              Jewelry
            </Link>
          </div>
          <SearchBar />
          <ShoppingCart className="ml-3" />
        </div>
        <span className="w-full h-px bg-gray-200"></span>
      </div>

      <div className="flex md:hidden pt-2 mx-1">
        <Link to="/" className="mr-auto font-extrabold text-primary">
          VON
        </Link>
        <Hamburger />
      </div>
    </>
  );
}
