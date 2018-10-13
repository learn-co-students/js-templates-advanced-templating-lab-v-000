function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function initForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function handlebarsSetup() {
  //handlebars registrations
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function(name) {
    return new Handlebars.SafeString("<li name = ingredientslist>" + name + "</li>")
  });
}

function createRecipe() {
  let recipe = getRecipeVals
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  let name= document.getElementById('nameHeader').innerText
  let description = document.getElementById('recipeDescription').innerText
  let ingredientsNodes = document.getElementsByName('ingredientsList')
  let ingredients = []
  for(let i=0; i<ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }
  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  let recipe = getRecipeVals
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  let name= document.getElementById('name').value
  let description = document.getElementById('description').value
  let ingredientNodes = document.getElementsByName('ingredients')
  let ingredients = []
  for(let i=0; i<ingredeintsNodes.length; i++) {
    if(ingredientNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  let recipe = {name, description, inredients}
  return recipe
}

}
