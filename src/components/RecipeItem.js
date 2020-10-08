import React from "react";
import PropTypes from "prop-types";

function RecipeItem({ thumbnail, title, href, ingredients }) {
    return (
        <div className="">
        <div>
            <img src={thumbnail} alt=""/>
        </div>
        <div>
            <p>Recipe: {title}</p><br />
            <a href={href} target="_blank" rel="noopener noreferrer">Source</a><br />
            <p>Ingredients: {ingredients}</p>
        </div>
    </div>
    );
}

RecipeItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
};

export default RecipeItem;