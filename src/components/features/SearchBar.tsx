import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <form className="flex bg-[#e6eaf6] border border-gray-400 rounded-2xl pl-0.5 items-center">
      <label htmlFor="search">
        <Search className="h-4" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for products"
        className="border-none outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
}
