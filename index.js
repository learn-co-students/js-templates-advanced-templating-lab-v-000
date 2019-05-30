function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function initForm() {
  const formTemplate = document.getElementById("recipe-form-template").innerHTML;
  const template = Handlebars.compile(formTemplate);
  document.getElementById("main").innerHTML = template({'submitAction': 'createRecipe()'});
}

function handlebarsSetup() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper("displayIngredient", function (ingredient){
    return new Handlebars.SafeString('<li>' + ingredient + '</li>');
  })
}

function createRecipe() {
  let recipe = getRecipeValues()
  const recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe);
}

function getRecipeValues() {
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const ingredientsElements = document.getElementsByName('ingredients');
  let ingredients =[];
  for (let i =0; i < ingredientsElements.length; i++) {
    if(ingredientsElements[i].value !== ""){
      ingredients.push(ingredientsElements[i].value)
    }
  }
  let recipe = {name, description, ingredients};
  return recipe;
}

function updateRecipe() {
  return createRecipe();
}

function displayEditForm() {
  const name = document.getElementById('recipeName').innerText;
  const description = document.getElementById('recipeDescription').innerText;
  const recipeIngredients = document.getElementById('ingredients').innerHTML;
  let ingredients = [];
  for (let i =0; i < recipeIngredients.length; i++) {
    if(recipeIngredients[i].innerText !== ""){
      ingredients.push(recipeIngredients[i].innerText)
    }
  }
  let recipe = {name, description, ingredients};
  const formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = formTemplate(recipe);
}
