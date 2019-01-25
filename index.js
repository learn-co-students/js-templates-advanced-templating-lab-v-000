function init() {
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById('recipe-form-template').innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['', '', '', '', '']})

  Handlebars.renderPartial('recipeDetailsPartial', document.getElemendById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })
}

function handleSubmit() {
  let recipe = {}
  let recipeName = document.getElementById('name');
  let recipeDescription = document.getElementById('description');
  let recipeIngredients = document.getElementByName('ingredients');
  recipe.name = recipeName.value;
  recipe.description = recipeDescription.value;
  recipe.ingredients = [];
  for(let i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].value);
  }
  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm() {
  let recipe = {}
  let recipeName = document.getElementById('recipeName');
  let recipeDescription = document.getElementById('recipeDescription');
  let recipeIngredients = document.getElementByName('ingredients');
  recipe.name = recipeName.innerHTML;
  recipe.description = recipeDescription.innerHTML;
  recipe.ingredients = [];
  for(let i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].innerHTML);
  }
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}





document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
