import React from "react";
import NavBar from "../../component/Layout/NavBar";
import SearchForm from "./SearchForm";
import "./Search.css";
const Search = () => {
  return (
    <div className="borderSearch">
      <div>
        <NavBar />
        <div>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Search;
