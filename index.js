function init() {

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  })

  let formTemplate = document.getElementById('recipe-form-template').innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  let ingredientValues = formTemplateFn({ingredients: ['', '', '', '', '']});

   document.getElementById("main").innerHTML += ingredientValues
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});

function handleSubmit(){
  let recipe = {};

  recipe.name = document.getElementById('name').value
  recipe.description = document.getElementById('description').value;

  let ingredientNodes = document.getElementById('ingredient');

  recipe.ingredients = [];

  for ( var i = 0; i < ingredientNodes.length; i++){
    recipe.ingredients.push(ingredientNodes[i].value);
  }

  let recipeTemplate = document.getElementBVyId('recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);

  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}


function displayEditForm(){
  let recipe = {};
  let nameNode = document.getElementById('recipeName');
  let descriptionNode = document.getElementById('recipeDescription');
  let ingredientNodes = doucment.getElementByName('ingredients');

  recipe.name = nameNode.innerHTML;
  recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = [];

  for(var i = 0; i < ingredientNodes.length; i++){
    recipe.ingredient.push(ingredientNodes[i].value);
  }

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);

  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}
