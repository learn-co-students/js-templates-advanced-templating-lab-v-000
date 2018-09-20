//put any page initialization/handlebars initialization here

function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li>' + ingredient + '</li>');
  })
}

function createRecipe() {
  var recipe = {
    name: document.getElementById("recipeName").value;
    description: document.getElementById("recipeDescription").value;
    ingredients: document.getElementById("recipeIngredients").value;
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  createRecipe();
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
