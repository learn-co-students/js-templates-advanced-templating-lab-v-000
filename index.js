function init() {
  //put any page initialization/handlebars initialization here

  // initialize new recipe template
  let newRecipeTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let recipeForm = newRecipeTemplateFn({ingredients: ["","","","",""]});
  document.getElementsByTagName("main")[0].innerHTML = recipeForm;

  // register partials and helpers
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})

function handleSubmit() {
  let recipeName = document.getElementById("name").value;
  let recipeDescription = document.getElementById("description").value;
  let recipeIngredients = document.getElementsByName("ingredients");

  let recipe = {};
  recipe.name = recipeName;
  recipe.description = recipeDescription;
  recipe.ingredients = [];
  for(let i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].value);
  }

  let recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipeHTML = recipeTemplateFn(recipe);
  document.getElementsByTagName("main")[0].innerHTML = recipeHTML;
}

function displayEditForm() {
  let recipeName = document.getElementById("recipeName").innerHTML;
  let recipeDescription = document.getElementById("recipeDescription").innerHTML;
  let recipeIngredients = document.getElementsByName("ingredients");

  let recipe = {};
  recipe.name = recipeName;
  recipe.description = recipeDescription;
  recipe.ingredients = [];
  for(let i = 0; i < recipeIngredients.length; i++) {
    recipe.ingredients.push(recipeIngredients[i].innerHTML);
  }
  console.log(recipe);

  let editRecipeTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let recipeForm = editRecipeTemplateFn(recipe);
  document.getElementsByTagName("main")[0].innerHTML = recipeForm;
}
