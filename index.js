function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = document.getElementById('recipe-form-template').innerHTML;
  var formTemplatefn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplatefn({ingredients: ['','','','','']});

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  })
}

function handleSubmit() {
  var recipe = {}
  var nameNode = document.getElementById('name');
  var descriptionNode = document.getElementById('description');
  var ingredientNodes = document.getElementsByName('ingredients');
  recipe.name = nameNode.value;
  recipe.description = descriptionNode.value;
  recipe.ingredients = [];
  for (var i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  }


  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var recipeTemplatefn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplatefn(recipe);
}

function displayEditForm() {
  var recipe = {}
  var nameNode = document.getElementById('recipeName');
  var descriptionNode = document.getElementById('recipeDescription');
  var ingredientNodes = document.getElementsByName('ingredients');
  recipe.name = nameNode.innerHTML;
  recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = [];
  for (var i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML);
  }

  var recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  var recipeFormTemplatefn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplatefn(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
