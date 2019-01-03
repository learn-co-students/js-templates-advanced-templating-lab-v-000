function init() {
  const recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  const recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = recipeFormTemplateFn({ ingredients: ['','','','',''] });

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + "</li>")
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  const recipe = {}
  recipe.name = document.getElementById("name").value;
  recipe.description = document.getElementById("description").value;
  recipe.ingredients = [];
  const ingredients = document.getElementsByName("ingredients")

  for (let i = 0; i < ingredients.length; i++) {
    recipe.ingredients.push(ingredients[i].value);
  }

  const recipeTemplate = document.getElementById("recipe-template").innerHTML;
  const recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

function displayEditForm() {
  const recipe = {}
  recipe.name = document.getElementById("recipeName").innerHTML;
  recipe.description = document.getElementById("recipeDescription").innerHTML;
  recipe.ingredients = [];
  const ingredients = document.getElementsByName("ingredients")

  for (let i = 0; i < ingredients.length; i++) {
    recipe.ingredients.push(ingredients[i].innerHTML);
  }

  const recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  const recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = recipeFormTemplateFn(recipe)
}
