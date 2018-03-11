function initForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(formTemplate)

  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function createRecipe(){
  let recipe = recipeValues();
  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}

function updateRecipe(){
  let recipe = recipeValues();
  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}

function recipeValues(){
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let ingredients = [];
  let ingredientsNodes = document.getElementsByName("ingredients")

  for (var i = 0; i < ingredientsNodes.length; i++){
    if (ingredientsNodes[i] !== "") {
    ingredients.push(ingredientsNodes[i].value)
    }
  }

  let recipe = {name, ingredients, description}
  return recipe
}

function displayEditForm(){
  let name = document.getElementById('nameHeader').innerText;
  let description = document.getElementById('recipeDescription').innerText;
  let ingredients = [];
  let ingredientsNodes = document.getElementsByName("ingredientsList");

  for (let i = 0; i < ingredientsNodes.length; i++){
      ingredients.push(ingredientsNodes[i].innerText)
    }

    let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

    let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
    let template = Handlebars.compile(recipeFormTemplate)

    document.getElementById('main').innerHTML = template(recipe);
}

function handlebarsInit(){
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
}

function init() {
  handlebarsInit();
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
