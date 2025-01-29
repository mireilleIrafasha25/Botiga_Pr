import { Search } from "lucide-react";
import "../styles/searchbar.css"
const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <Search className="search-icon" size={20} />
    </div>
  );
};

export default SearchBar;
