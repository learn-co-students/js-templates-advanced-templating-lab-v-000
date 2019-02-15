function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById('recipe-form-template').innerHTML
  let formTemplateFcn = Handlebars.compile(formTemplate);
  let formHTML = formTemplateFcn(
    { ingredients: ['','','','',''] }
  );

  document.getElementsByTagName('main')[0].innerHTML += formHTML;

  // register partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  //register helpers
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>') ;
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  // Variable declarations
  let recipe = {};
  let nameNode = document.getElementById('name');
  let descriptionNode = document.getElementById('description');
  let ingredientNodes = document.getElementsByName('ingredients');

  recipe.name = nameNode.value;
  recipe.description = descriptionNode.value;
  recipe.ingredients = [];

  for(let i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  }

  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let recipeTemplateFcn = Handlebars.compile(recipeTemplate);
  
  document.getElementById('main').innerHTML = recipeTemplateFcn(recipe);
}

function displayEditForm() {
  var recipe = {}
  var nameNode = document.getElementById('recipeName');
  var descriptionNode = document.getElementById('recipeDescription');
  var ingredientNodes = document.getElementsByName('ingredients');
  recipe.name = nameNode.innerHTML;
  recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = [];
  for(var i = 0 ; i < ingredientNodes.length ; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML);
  }
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}
