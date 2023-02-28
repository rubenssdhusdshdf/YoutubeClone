import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter d-flex align-items-center">
      <div className="single-filter">
        <span className="filter-items pointer active">All</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Mixes</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Food</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Music</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">React</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Cats</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">live</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Sport</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">News</span>
      </div>
    </div>
  );
}

export default Filter;
