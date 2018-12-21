function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  })
  let formTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplate = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplate({ingredients: ['','','','','']});
}

function handleSubmit() {
  // event.preventDefault();
  let recipe = {};
  let rN = document.getElementById('name');
  let rD = document.getElementById('description');
  let rI = document.getElementsByName('ingredients');  

  recipe.name = rN.value;
  recipe.description = rD.value;
  recipe.ingredients = [];
  for (let i = 0; i < rI.length; i++) {
      recipe.ingredients.push(rI[i].value);
  }
  let templateForRecipe = document.getElementById('recipe-template').innerHTML;
  let recipeFn = Handlebars.compile(templateForRecipe);
  document.getElementById('main').innerHTML = recipeFn(recipe);
}

function displayEditForm() {
  let recipe = {};
  let rN = document.getElementById('recipeName');
  let rD = document.getElementById('recipeDescription');
  let rI = document.getElementsByName('ingredients');
  recipe.name = rN.innerHTML;
  recipe.description = rD.innerHTML;
  recipe.ingredients = [];
  for (let i = 0; i < rI.length; i++) {
      recipe.ingredients.push(rI[i].innerHTML);
  }
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
