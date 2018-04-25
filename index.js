function loadForm(recipe) {
  if (!recipe) {
    recipe = {};
    recipe.ingredients = ["","","","",""];
  }
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function createRecipe() {
  // let ingredientNodes = Array.prototype.slice.call(document.getElementsByName("ingredients"), 0);
  // let ingredients = [];
  // for (ingredient in ingredientNodes){
  //   if (ingredientNodes[ingredient].value !== ""){
  //     ingredients.push(ingredientNodes[ingredient].value);
  //   }
  // }
  // let name = document.getElementById("recipeName").value;
  // let description = document.getElementById("recipeDescription").value;
  let recipe = getRecipe();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe);
}

function getRecipe() {
  let ingredientNodes = Array.prototype.slice.call(document.getElementsByName("ingredients"), 0);
  let ingredients = [];
  let name, description;
  for (ingredient in ingredientNodes){
    if (ingredientNodes[ingredient].value !== "" && ingredientNodes[ingredient].value !== 0){
      ingredients.push(ingredientNodes[ingredient].value);
    }else if (ingredientNodes[ingredient].innerHTML !== "") {
      ingredients.push(ingredientNodes[ingredient].innerHTML);
    }
  }

  if (name = document.getElementById("recipeName").value) {
    description = document.getElementById("recipeDescription").value
  }else if (name = document.getElementById("recipeName").innerHTML) {
    description = document.getElementById("recipeDescription").innerHTML;
  }

  let recipe = {name, description, ingredients};
  return recipe;
}

function displayEditForm() {
  recipe = getRecipe();
  loadForm(recipe);
}

function updateRecipe() {

}

function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredients'>" + ingredient + "</li>")
  })
  // Handlebars.registerHelper("debug", function(optionalValue) {
  //   console.log("Current Context");
  //   console.log("====================");
  //   console.log(this);
  //
  //   if (optionalValue) {
  //     console.log("Value");
  //     console.log("====================");
  //     console.log(optionalValue);
  //   }
  // });

  loadForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
