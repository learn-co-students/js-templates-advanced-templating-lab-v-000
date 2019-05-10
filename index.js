function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}

function initForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName('main')[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function displayEditForm() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;

  let ingredientsAry = [];

  let ingredientsList = document.getElementsByName("ingredientLi");

  for (var i = 0; i < ingredientsList.length; i++) {
    ingredientsAry.push(ingredientsList[i].innerText);
  }

  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  let recipe = {name, description, ingredientsAry, submitAction: 'createRecipe()'};

  document.getElementById("main").innerHTML = recipeFormTemplate(recipe);
}

function createRecipe() {
  let recipe = recipeValues();

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function recipeValues() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;

  let ingredients = document.getElementsByName("ingredients");

  let ingredientsArry = [];

  for (var i = 0; i < ingredients.length; i++) {
    ingredientsArry.push(ingredients[i].value);
  }

  let recipe = {name, ingredients, description};

  return recipe;
}

function updateRecipe() {
  let recipe = recipeValues();

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function handlebarsSetup(){
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return new Handlebars.SafeString("<li name='ingredientLi'>" + ingredient + "</li>");
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
