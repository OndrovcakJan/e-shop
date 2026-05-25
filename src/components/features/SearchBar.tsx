import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="flex bg-[#e6eaf6] rounded-2xl pl-0.5 items-center">
      <label htmlFor="search">
        <Search className="h-4"/>
      </label>
      <input type="text" id="search" placeholder="Search for products" />
    </form>
  );
}
