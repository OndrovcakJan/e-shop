import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import SearchBar from "../features/SearchBar";

const validCategory = ["all", "men", "women", "jewelry", "electronics"];
interface Props {
  category: string;
}

export default function Header({ category }: Props) {
  let cat: string;
  if (validCategory.includes(category)) {
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
      <div className="hidden md:flex">
        <Link to="/" className="">
          VON
        </Link>
        <div>
          <Link to="/" className={getClass("all")}>
            Shop all
          </Link>
          <Link to="/" className={getClass("men")}>
            Men
          </Link>
          <Link to="/" className={getClass("women")}>
            Women
          </Link>
          <Link to="/" className={getClass("jewelry")}>
            Jewelry
          </Link>
          <Link to="/" className={getClass("electronics")}>
            Electronics
          </Link>
        </div>
        <SearchBar />
        <ShoppingCart />
      </div>

      <div className="flex md:hidden">
        <h1>Hambac</h1>
      </div>
    </>
  );
}
