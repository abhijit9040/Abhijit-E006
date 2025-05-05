import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function RecipeManage(){
    const[recipe , setRecipe] = useState("");
    const[Ingredients , setIngredients] = useState("");
    const[Steps, setSteps] = useState("");
    const[cookingTime , setcookingTime] = useState("");
    
    function recipeHandle(e){
        e.preventDefault();
        axios.post("http://localhost:5000/recipeManage", {
            recipe: recipe,
            ingredients: Ingredients,
            steps: Steps,
            cookingTime: cookingTime
        }).then((response) => {
            console.log(response.data);
            alert("Recipe added successfully!");
            window.location.href = "/recipeManage";
        }).catch((error) => {
            console.error("Error adding recipe:", error.response?.data);
            alert(error.response?.data?.error || "Failed to add recipe");
        });
    }
    return (
        <>
        <form>
            <div className="mb-3">
                <label htmlFor="recipe" className="form-label">Recipe</label>
                <input
                    type="text"
                    className="form-control"
                    id="recipe"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Ingredients" className="form-label">Ingredients</label>
                <input
                    type="text"
                    className="form-control"
                    id="Ingredients"
                    value={Ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Steps" className="form-label">Steps</label>
                <input
                    type="text"
                    className="form-control"
                    id="Steps"
                    value={Steps}
                    onChange={(e) => setSteps(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cookingTime" className="form-label">Cooking Time</label>
                <input
                    type="text"
                    className="form-control"
                    id="cookingTime"
                    value={cookingTime}
                    onChange={(e) => setcookingTime(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={recipeHandle}>Add Recipe</button>
            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = "/recipeManage"}>Back</button>

        </form>
        </>
    )
}