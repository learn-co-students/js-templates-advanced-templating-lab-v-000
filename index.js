function init() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

  let formTemplate = document.getElementById('recipe-form-template').innerHTML;
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({ 'submitaction': 'createRecipe()'});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function createRecipe() {
  let recipe = recipeContext();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
  let recipe = recipeContext();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function recipeContext() {
  const ingredientsNodes = document.getElementsByName("ingredients")

  let ingredients = [];
  for (let i = 0; i < ingredientsNodes.length; i++) {
    let ingredient = ingredientsNodes[i].value;
    if (ingredient !== "") {
      ingredients.push(ingredient);
    }
  }
    const name = document.getElementById("name").value
    const description = document.getElementById("description").value;
    const recipe = {name, ingredients, description};
    return(recipe);
}

function displayEditForm() {
  let name = document.getElementById('nameHeader').innerText;
  let description = document.getElementById('description').innerText;
  let ingredientsNodes = document.getElementsByName('ingredientsList');
  let ingredients = [];
  for (let i = 0; i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i]);
  }
  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}
