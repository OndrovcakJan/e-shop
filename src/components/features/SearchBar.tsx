import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="flex">
      <label htmlFor="search">
        <Search />
      </label>
      <input type="text" id="search" placeholder="Search for products" />
    </form>
  );
}
