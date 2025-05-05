import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function RecipeManage() {
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [cookingTime, setCookingTime] = useState("");

    const handleSubmit = (e) => {
        console.log(recipe, ingredients, steps, cookingTime);
        
        e.preventDefault();
        axios.post("http://localhost:5000/recipeManage", {
            recipe,
            ingredients,
            steps,
            cookingTime
        })
            .then((response) => {
                console.log(response.data);
                alert("Recipe added successfully!");
                navigate("/recipeManage");
            })
            .catch((error) => {
                console.error("Error adding recipe:", error.response?.data);
                alert(error.response?.data?.error || "Error adding recipe");
            });
    };

    return (
        <div className="container mt-5">
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="recipe" className="form-label">Recipe Name</label>
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
                    <label htmlFor="ingredients" className="form-label">Ingredients</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="steps" className="form-label">Steps</label>
                    <input
                        type="text"
                        className="form-control"
                        id="steps"
                        value={steps}
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
                        onChange={(e) => 
                            setCookingTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>
            </form>
        </div>
    );
}


