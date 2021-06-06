function init() {
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(recipeFormTemplate);

  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit(){
  let recipe = {};
  let recipeName = document.getElementById("name");
  let recipeDescription = document.getElementById("description");
  let recipeIngredients = document.getElementsByName("ingredients");

  recipe.name = recipeName.value;
  recipe.description = recipeDescription.value;
  recipe.ingredients = [];

  for(let i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].value);
  }

  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm(){
  let recipe = {};
  let recipeName = document.getElementById("recipeName");
  let recipeDescription = document.getElementById("recipeDescription");
  let recipeIngredients = document.getElementsByName("ingredients");

  recipe.name = recipeName.innerHTML;
  recipe.description = recipeDescription.innerHTML;
  recipe.ingredients = [];

  for (let i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].innerHTML);
  }

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let recipeFormFn = Handlebars.compile(recipeFormTemplate);

  document.getElementById("main").innerHTML = recipeFormFn(recipe);
}