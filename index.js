function initializeForm(){
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template();
}

function getValues(){
  let formIngredients = document.getElementsByName("ingredients");
  let ingredients = []
  for(var i=0;i<formIngredients.length;i++) {
    if(formIngredients[i].value !== "") {
      ingredients.push(formIngredients[i].value)
    }
  }
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let recipe = {name, ingredients, description}
  return(recipe)
}

function createRecipe(){
  let recipe = getValues();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm(){
  let name = document.getElementById("header-name").innerText;
  let description = document.getElementById("recipeDescription").innerText;
  let ingredients = [];
  let recipeIngredients = document.getElementsByName("ingredients-list");
  for(var i=0;i<recipeIngredients.length;i++) {
      ingredients.push(recipeIngredients[i].innerText)
  }

  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'};
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);

  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe(){
  createRecipe();
}


function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', (ingredient => new Handlebars.SafeString('<li name="ingredients-list">' + ingredient + '</li>')));
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  initializeForm();
}





document.addEventListener("DOMContentLoaded", (event => init()));
