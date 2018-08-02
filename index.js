function initForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function getRecipeVals() {
  let ingredientsNodes = document.getElementsByName("ingredients");
  let ingredients = [];
  for (const ingredient in ingredientsNodes) {
    if (ingredient.value !== "") {
      ingredients.push(ingredient.value);
    }
  }
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let recipe = {name, ingredients, description};
  return recipe;
}

function createRecipe() {
  let recipe = getRecipeVals();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
  let recipe = getRecipeVals();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm() {
  let name = document.getElementById("nameHeader").innerText;
  let description = document.getElementById("recipeDescription").innerText;
  let ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for (const ingredient in ingredientsNodes) {
    ingredients.push(ingredient.innerText);
  }

  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
