function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  initForm();
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="displayIngredients">' + ingredient.value + '</li>')
    })
  

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
}



function initForm(){

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var formHTML = formTemplate({ 'submitAction': 'createRecipe()'})
  document.getElementsByTagName("main")[0].innerHTML = formHTML;
}

function createRecipe() {
  var recipe = getRecipe();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipeHTML = recipeTemplate(recipe);
  document.getElementById("main").innerHTML = recipeHTML;
}

function updateRecipe()
{
  var recipe = getRecipe();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipeHTML = recipeTemplate(recipe);
  document.getElementById("main").innerHTML = recipeHTML;
}
function getRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = Array.from(document.getElementsByName("ingedients"));
  ingredients.map(function(ingredient){return ingredient.value});
  return {name, ingredients, description}

}

function displayEditForm() {
  var name = document.getElementById("recipeName").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredients = Array.from(document.getElementsByName("ingedients"));
  ingredients.map(function(ingredient){return ingredient.value});
  var recipe = {name, ingredients, description, submitAction: 'createRecipe()'}
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var recipeFormHTML = recipeFormTemplate(recipe)
  document.getElementById("main").innerHTML = recipeFormHTML;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})