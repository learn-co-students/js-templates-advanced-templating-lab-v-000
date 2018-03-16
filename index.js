function createRecipe() {
  let recipe = getRecipeValues();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
};

function updateRecipe() {
  createRecipe();
};

function displayEditForm() {
  let name = document.getElementById("recipeName").innerText;
  let description = document.getElementById("recipeDescription").innerText;
  let ingredientsNodes = document.getElementsByName("ingredientsList");
  let ingredients = [];

  for (var i=0; i<ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].value != "") {
      ingredients.push(ingredientsNodes[i].innerText)
    }
  };

  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'};

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
};

function getRecipeValues() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;

  let ingredientsNodes = document.getElementsByName("ingredients");
  let ingredients = [];

  for (var i=0; i<ingredientsNodes.length; i++) {
    if (ingredientsNodes[i].value != "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  };

  let recipe = {name, description, ingredients};
  return recipe;
};

// INITIALIZATION

function init() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredientsList'" + ingredient + "</li>")
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction' : 'createRecipe()'});
};

document.addEventListener("DOMContentLoaded", function(event) {
  init()
});
