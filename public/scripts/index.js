// scripts/index.js
$(document).ready(function() {
    // Function to fetch and display all recipes
    function getAllRecipes() {
      $.get('http://localhost:4000/recipes', function(recipes) {
        $('#recipesList').empty();
        recipes.forEach(function(recipe) {
          $('#recipesList').append(`
            <div class="recipe-item">
              <h3>${recipe.title}</h3>
              <p>${recipe.description}</p>
              <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
              <p>Instructions: ${recipe.instructions}</p>
              <img src="${recipe.imageUrl}" alt="Recipe Image" width="200">
              <div>
                <a href="edit-recipe.html?id=${recipe._id}" class="btn btn-info">Edit</a>
                <button class="btn btn-danger" onclick="deleteRecipe('${recipe._id}')">Delete</button>
              </div>
            </div>
          `);
        });
      });
    }
  
    // Initial load of recipes
    getAllRecipes();
  });
  
  // Function to delete a recipe
  window.deleteRecipe = function(id) {
    if (confirm('Are you sure you want to delete this recipe?')) {
      $.ajax({
        url: `http://localhost:4000/recipes/${id}`,
        type: 'DELETE',
        success: function(result) {
          alert('Recipe deleted successfully');
          location.reload();
        }
      });
    }
  };
  