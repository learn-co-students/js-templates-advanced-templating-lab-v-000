function init() {
  Handlebars.registerPartial('recipeDetailsPartial',
     document.getElementById("recipe-details-partial").innerHTML)

   Handlebars.registerPartial('recipeFormPartial',
      document.getElementById("recipe-template").innerHTML)

   Handlebars.registerHelper('displayIngredient', function () {
     return new Handlebars.SafeString(this.value)
   })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredients = document.getElementsByName("ingredients")

  let info = {name: name, description: description, ingredients: ingredients}
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = recipeTemplate(info);
  document.getElementById("display-recipe").innerHTML += result;
}

function displayEditForm() {
  let editRecipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let result = editRecipeTemplate();
  document.getElementById("display-recipe").innerHTML += result;
}

function updateRecipe() {
  
}
