function initForm() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = formTemplate({submitAction: 'createRecipe();'});
}

function createRecipe() {
  var recipe = getRecipe();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipeHTML = recipeTemplate(recipe);

  document.getElementById("main").innerHTML = recipeHTML;
}

function displayEditForm() {
  var name = document.getElementById("name").innerText;
  var description = document.getElementById("description").innerText;
  var ingredients = [];

  var ingredientsElements = document.getElementsByName("ingredients");
  for(i=0; i<ingredientsElements.length; i++) {
    var ingredient = {};
    ingredient.name = ingredientsElements[i].getElementsByClassName("ingredient-name")[0].innerText;
    ingredient.quantity = ingredientsElements[i].getElementsByClassName("ingredient-quantity")[0].innerText;
    if (ingredient.name !== "") {
      ingredients.push(ingredient);
    }
  }

  var recipe = {name: name, description: description, ingredients: ingredients, submitAction: "updateRecipe();"};
  var recipeEditTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var recipeEditHTML = recipeEditTemplate(recipe);
  // submit using updateRecipe()
  document.getElementById("main").innerHTML = recipeEditHTML;
}

function updateRecipe() {
  var recipe = getRecipe();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipeHTML = recipeTemplate(recipe);

  document.getElementById("main").innerHTML = recipeHTML;
}

function getRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = [];

  var ingredientsElements = document.getElementsByName("ingredients");
  for(i=0; i<ingredientsElements.length; i++) {
    var ingredient = {};
    ingredient.name = ingredientsElements[i].getElementsByClassName("ingredient-name")[0].value;
    ingredient.quantity = ingredientsElements[i].getElementsByClassName("ingredient-quantity")[0].value;
    if (ingredient.name !== "") {
      ingredients.push(ingredient);
    }
  }

  var recipe = {"name": name, "description": description, "ingredients": ingredients};
  return recipe;
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li name=\"ingredients\"><span class=\"ingredient-quantity\">" + this.quantity + "</span> of <span class=\"ingredient-name\">" + this.name + "</span></li>");
  });
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
