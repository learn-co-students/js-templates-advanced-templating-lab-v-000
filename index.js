function init() {
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var compiledRecipeFormTemplate = Handlebars.compile(recipeFormTemplate)

  document.getElementById("main").innerHTML = compiledRecipeFormTemplate({ingredients: ['','','','','']})

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ing){
  return new Handlebars.SafeString('<li name="ingredients">' + ing + '</li>');
  })
}



function handleSubmit(){
  var recipe = {};
  recipe.name = document.getElementById('name').value;
  recipe.description = document.getElementById('description').value;
  var ingredientNodes = document.getElementsByName('ingredients')
  recipe.ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].value)
  }

  var recipeTemplate = document.getElementById('recipe-template').innerHTML

  var recipeTemplateFn = Handlebars.compile(recipeTemplate)

  document.getElementById('main').innerHTML = recipeTemplateFn(recipe)
}

function displayEditForm(){
  debugger;
  var recipe = {};
  recipe.name = document.getElementById('recipeName').innerHTML;
  recipe.description = document.getElementById('recipeDescription').innerHTML;
  var ingredientNodes = document.getElementsByName('ingredients')
  recipe.ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML)
  }
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})