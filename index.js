function init() {
  displayRecipeForm();

  Handlebars.registerHelper("displayIngredient", function(){
    return new Handlebars.SafeString(`<li>${this}</li>`);
  });

  Handlebars.registerHelper("ingredientInputs", function(){
    console.log(this)
    return new Handlebars.SafeString("<input type='text' name='ingredients'>");
  });

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-template").innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

let recipe = {};

function createRecipe() {
  recipe.name = document.getElementById("name").value;
  recipe.description = document.getElementById("description").value;
  let rawIngredients = [...document.getElementsByName("ingredients")].filter(i => {
    if (i.value !== "" && i.value !== " ") {
      return i.value;
    }
  })
  let ingredients = rawIngredients.map(i => i.value);
  recipe.ingredients = ingredients;
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = template(recipe);
  document.getElementById("main").innerHTML = result;
}

function addField() {
  let inputs = document.getElementById("inputFields");
  let input = document.createElement("input");
  input.type = "text";
  input.name = "ingredients";
  let br = document.createElement("br");
  inputs.appendChild(input);
  inputs.appendChild(br);
}

function updateRecipe() {
  createRecipe();
}

function displayRecipeForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let result = template(recipe);
  document.getElementById("main").innerHTML = result;
}

function displayEditForm() {
  // debugger;
  console.log(recipe);
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let result = template(recipe);
  document.getElementById("main").innerHTML = result;
}
