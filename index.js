function init() {
  //put any page initialization/handlebars initialization here
  createPartials();
  createHelpers();
  loadRecipeForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
function createPartials() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}

function createHelpers() {
  Handlebars.registerHelper('displayIngredient', function() {
    if (this != "") {
      return '<li>' + this + '</li>';
    }
  })
}

function loadRecipeForm() {
  const recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let context = {
    submitAction: "createRecipe();"
  }

  document.getElementsByTagName("main")[0].innerHTML += recipeForm(context);
}

function createRecipe() {
  const recipe = {
  name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: []
  }

  let ingredients = document.getElementsByName("ingredients");

  for (let i=0; i < ingredients.length; i++) {
    if (ingredients[i]) {
      recipe['ingredients'].push(ingredients[i].value);
    }
  }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipeResult = recipeTemplate(recipe);
  console.log(recipeResult)
  document.getElementsByTagName("main")[0].innerHTML += recipeResult;
}

function displayEditForm() {
  const editForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let context = {
    submitAction: "updateRecipe();"
  }

  document.getElementsByTagName("main")[0].innerHTML += editForm(context);
}
function updateRecipe() {
  const recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: []
  }

  let ingredients = document.getElementsByName("ingredients");

  for (let i=0; i < ingredients.length; i++) {
    if (ingredients[i]) {
      recipe['ingredients'].push(ingredients[i].value);
    }
  }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipeResult = recipeTemplate(recipe);
  console.log(recipeResult)
  document.getElementsByTagName("main")[0].innerHTML = recipeResult;
}
