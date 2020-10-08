import React from "react";
import PropTypes from "prop-types";

export default function SearchRecipe({ searchHandle }) {
    return (
        <input type="text" placeholder="Search for recipe" onChange={event => searchHandle(event)}></input>
    );
}

SearchRecipe.propTypes = {
    searchHandle: PropTypes.func.isRequired,
};