function init() {
  var formTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  var recipe = {}
  var recipeName = document.getElementById('name');
  var recipeDescription = document.getElementById('description');
  var recipeIngredients = document.getElementsByName('ingredients');

  recipe.name = recipeName.value;
  recipe.description = recipeDescription.value;
  recipe.ingredients = [];

  debugger

  for(var i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].value);
  }

  var recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm() {
  var recipe = {}
  var recipeName = document.getElementById('recipeName');
  var recipeDescription = document.getElementById('recipeDescription');
  var recipeIngredients = document.getElementsByName('ingredients');

  recipe.name = recipeName.innerHTML;
  recipe.description = recipeDescription.innerHTML;
  recipe.ingredients = [];
  for(var i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].innerHTML);
  }

  var recipeFormTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}
