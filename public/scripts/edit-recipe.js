// scripts/edit-recipe.js
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
  
    // Fetch recipe details and fill the form
    $.get(`http://localhost:4000/recipes/${recipeId}`, function(recipe) {
      $('#recipeId').val(recipe._id);
      $('#title').val(recipe.title);
      $('#description').val(recipe.description);
      $('#ingredients').val(recipe.ingredients.join(', '));
      $('#instructions').val(recipe.instructions);
    });
  
    $('#editRecipeForm').submit(function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      $.ajax({
        url: `http://localhost:4000/recipes/${recipeId}`,
        type: 'PATCH',
        data: formData,
        contentType: false,
        processData: false,
        success: function(result) {
          alert('Recipe updated successfully');
          window.location.href = 'index.html';
        },
        error: function(err) {
          alert('Error updating recipe');
        }
      });
    });
  });
  