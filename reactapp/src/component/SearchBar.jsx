import { Search } from "lucide-react";
import "../styles/searchbar.css"
const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        style={{
          marginTop: "10px",
          marginLeft: "0.5rem",   /* Equivalent to ml-2 (8px) */
          outline: "none" ,        /* Equivalent to outline-none */
          width: "100%",           /* Equivalent to w-full */
           background: "transparent", /*Equivalent to bg-transparent */
          border: "none"  }}
      />
      <Search className="search-icon" size={30}  style={{paddingRight:"20px"}}/>
    </div>
  );
};

export default SearchBar;
