function init() {
  //put any page initialization/handlebars initialization here

  // initialize recipeDetailsPartial
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  // initialize recipeFormPartial
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  // register displayIngredient helper
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString("<li name='recipeIngredient'>" + ingredient + "</li>");
  });

  // need to keep this below the registrations above otherwise page doesn't load correctly
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  // add the form template to <main> and pass in the submitAction
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = recipeValues();
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

function recipeValues() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  var ingredientList = document.getElementsByName("ingredients");
  var ingredients = [];
  for(let i = 0; i<ingredientList.length; i++){
    // only add ingredient if not blank
    if(ingredientList[i].value !== "") {
      ingredients.push(ingredientList[i].value);
    }
  }
  return {name, description, ingredients}
}

function displayEditForm() {
  var name = document.getElementById("recipeName").innerText;
  var description = document.getElementById("recipeDescription").innerText;

  var ingredientList = document.getElementsByName("recipeIngredient");
  var ingredients = [];
  for(let i = 0; i<ingredientList.length; i++){
    ingredients.push(ingredientList[i].innerText);
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe();'}

  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);

  // add the form template to <main> and pass in the submitAction
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

function updateRecipe() {
  var recipe = recipeValues();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}
