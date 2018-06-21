function initForm() {
  const formTemplate = document.getElementById("recipe-form-template").innerHTML;
  const template = Handlebars.compile(formTemplate);

  document.getElementById("main").innerHTML = template();
}

function createRecipe() {
  const recipe = {};

  recipe.name = document.getElementById("name").value
  recipe.description = document.getElementById("description").value
  recipe.ingredients = [];

  const ingredientElems = document.getElementsByName("ingredients")

  for (const ingredientElem of ingredientElems) {
    if (ingredientElem.value !== "") {
      recipe.ingredients.push(ingredientElem.value);
    }
  }

  const recipeTemplate = document.getElementById("recipe-template").innerHTML;
  const template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() { return createRecipe() }

function displayEditForm() {
  const recipe = {};

  recipe.name = document.getElementById("nameHeader").innerText;
  recipe.description = document.getElementById("recipeDescription").innerText;
  recipe.ingredients = [];

  recipe.ingredientElems = document.getElementsByName("ingredientsList");

  for (const ingredientElem of recipe.ingredientElems) {
    if (ingredientElem.innerText !== "") {
      recipe.ingredients.push(ingredientElem.innerText);
    }
  }

  const formTemplate = document.getElementById("recipe-form-template").innerHTML
  const template = Handlebars.compile(formTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}


function init() {
  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
