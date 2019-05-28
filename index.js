function init() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString(ingredient)
})
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template({"submitAction": "createRecipe()"});
  document.getElementById("main").innerHTML = result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template();
}

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipeInfo = getRecipeInfo();
  console.log(recipeInfo)
  var result = template(recipeInfo);
  document.getElementById("main").innerHTML = result;
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template();
}

function getRecipeInfo() {
  let name = document.getElementById("name").innerHTML;
  let description = document.getElementById("description").innerHTML;
  let ingredients = document.getElementsByName("ingredients").innerHTML;
  console.log(name)
  return {"name": name, "description": description, "ingredients": ingredients}
}
