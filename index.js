function init() {
  registerRecipeFormPartial();
  registerRecipeForm();
  registerRecipeDetailsPartial();
  registerDisplayIngredientHelper();
}

function registerRecipeForm() {
  var recipeFormHTML = document.getElementById("recipe-form-template").innerHTML
  var recipeFormTemplate = Handlebars.compile(recipeFormHTML)
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate({'submitAction': 'createRecipe()'})
}

function registerRecipeFormPartial() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function registerRecipeDetailsPartial() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
}

function registerDisplayIngredientHelper() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  });
}


function getRecipe() {
  var ingredientsCol = document.getElementsByName('ingredients');
  var ingredients = [];
  for (var i=0; i<ingredientsCol.length;i++) {
    if (ingredientsCol[i].value !== "") {
      ingredients.push(ingredientsCol[i].value)
    }
  }
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var recipe = {name, ingredients, description};
  return(recipe)
}

function createRecipe() {
  console.log("hello");
  var recipe = getRecipe();
  console.log(recipe);
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  // debugger;
  document.getElementById('main').innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipe()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}




document.addEventListener("DOMContentLoaded", function(event) {
  init()
})





