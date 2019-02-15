function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById('recipe-form-template').innerHTML
  let formTemplateFcn = Handlebars.compile(formTemplate);
  let formHTML = formTemplateFcn(
    { ingredients: ['','','','',''] }
  );

  document.getElementsByTagName('main')[0].innerHTML = formHTML;

  // register partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  //register helpers
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>') ;
  })
}

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
  let recipe = {};
  let nameNode = document.getElementById('recipeName');
  let descriptionNode = document.getElementById('recipeDescription');
  let ingredientNodes = document.getElementsByName('ingredients');

  recipe.name = nameNode.innerHTML;
  recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = [];

  for(let i = 0; i < ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML);

  }
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplateFcn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFcn(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})