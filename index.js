function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  renderRecipeForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})

function renderRecipeForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML += template();
}

function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  var ingredientNodes = document.getElementsByName("ingredients");
  var ingredients = []
  for(let i=0;i<ingredientNodes.length;i++){
    if(ingredientNodes[i].value !== "") {
       ingredients.push(ingredientNodes[i].value)
    }
  }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipeHTML = template({name: name, description: description, ingredients: ingredients});
  document.getElementById("main").innerHTML += recipeHTML;
}
