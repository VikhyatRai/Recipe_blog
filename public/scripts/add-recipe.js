scripts/add-recipe.js
$(document).ready(function() {
    $('#addRecipeForm').submit(function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      $.ajax({
        url: 'http://localhost:4000/recipes',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(result) {
          alert('Recipe added successfully');
          window.location.href = 'index.html';
        },
        error: function(err) {
          alert('Error adding recipe');
        }
      });
    });
  });
  
// scripts/add-recipe.js
// $(document).ready(function() {
//   $('#addRecipeForm').submit(function(e) {
//     e.preventDefault();
//     // Handle form submission for adding a new recipe
//   });
// });
