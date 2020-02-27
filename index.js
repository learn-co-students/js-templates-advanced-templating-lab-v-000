function createRecipe () {
  const recipe = getRecipeData();
  const recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const html = recipeTemplateFn(recipe);
  const recipeDiv = document.getElementById("recipe");
  recipeDiv.innerHTML = html;
}

function updateRecipe () {
  const recipe = getRecipeData();
  const recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const html = recipeTemplateFn(recipe);
  const recipeDiv = document.getElementById("recipe");
  recipeDiv.innerHTML = html;
}

function getRecipeData () {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const ingredientFormNodes = document.getElementsByName("ingredients");
  const ingredientsData = [];
  for (let i = 0; i < ingredientFormNodes.length; i++) {
    if (ingredientFormNodes[i].value !== '') {
      ingredientsData.push(ingredientFormNodes[i].value)
    }
  }
  const recipe = {name: name, description: description, ingredients: ingredientsData};
  return recipe;
}

function displayEditForm () {
  const ingredientNodes = document.getElementsByName("recipeIngredient")
  const ingredientsData = [];
  for (let i = 0; i < ingredientNodes.length; i++) {
    ingredientsData.push(ingredientNodes[i].innerText)
  }
  const recipe = {
    name: document.getElementById('recipeName').innerText,
    description: document.getElementById("recipeDescription").innerText,
    ingredients: ingredientsData,
    submitFunction: 'updateRecipe();'
  };
  const recipeFormTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  const html = recipeFormTemplateFn(recipe);
  const recipeDiv = document.getElementById("recipe");
  recipeDiv.innerHTML = html;
}

function handlebarsRegistration () {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function () {return new Handlebars.SafeString('<li id="recipeIngredient">' + this + '</li>');});
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsRegistration();
  const initialFormTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  const html = initialFormTemplateFn({submitFunction: 'createRecipe();'});
  const recipeDiv = document.getElementById("recipe");
  recipeDiv.innerHTML = html;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
