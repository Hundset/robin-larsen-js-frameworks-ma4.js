import React, { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";
import SearchRecipe from "./SearchRecipe";
import { apiURL } from "./apiURL";

function RecipeList () {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect (() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(json =>  {
                console.log(json.results);
                setRecipes(json.results);
                setFilteredRecipes(json.results);
            })
            .catch(error => console.log(error));
    }, []);

    const searchRecipe = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = recipes.filter(function(recip) {
            const lowerCaseTitle = recip.title.toLowerCase();

            if (lowerCaseTitle.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        setFilteredRecipes(filteredArray)
    }
    
    return (
    <>
        <SearchRecipe searchHandle={searchRecipe}/>
        <ul>
            {filteredRecipes.map(recipe => {
                const { thumbnail, title, href, ingredients } = recipe;

                return (
                    <RecipeItem thumbnail={thumbnail} title={title} href={href} ingredients={ingredients} />
                )
            })}
        </ul>
    </>
    );
}

export default RecipeList;