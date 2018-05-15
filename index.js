//
//
//
// function compileForm(){
//   let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
//   document.getElementsByTagName("main")[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'})
// }
//
// function renderPartials() {
//   Handlebars.registerHelper('displayIngredient', function(ingredient) {
//   return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
// })
//   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
//   Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
// }
//
// function createRecipe() {
//   let recipe = getRecipeVals()
//   let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
//   document.getElementById("main").innerHTML = recipetemplate(recipe)
// }
//
// function getRecipeVals() {
//   let singleIngredients = document.getElementsByName("ingredients")
//   let ingredients = []
//   for(let i=0;i<singleIngredients.length;i++) {
//     ingredients.push(singleIngredients[i].value)
//   }
//   let name = document.getElementById("name").value
//   let description = document.getElementById("description").value
//   let recipe = {name, ingredients, description}
//   return(recipe)
// }
//
// function updateRecipe() {
//   let recipe = getRecipeVals()
//   let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
//   document.getElementById("main").innerHTML = recipetemplate(recipe)
// }
//
// function displayEditForm() {
//   let name = document.getElementById("nameHeader").innerText
//   let description = document.getElementById("recipeDescription").innerText
//   let singleIngredients = document.getElementsByName("ingredientsList")
//   let ingredients = []
//   for(let i=0;i<singleIngredients.length;i++) {
//     ingredients.push(singleIngredients[i].innerText)
//   }
//
//   let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
//
//   let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
//   document.getElementById("main").innerHTML = recipeFormTemplate(recipe)
// }
//
// function init() {
//   //put any page initialization/handlebars initialization here
//   compileForm()
//   renderPartials()
// }
// document.addEventListener("DOMContentLoaded", function(event) {
//   init()
// })



function initForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  let recipe = getRecipeVals()
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  let recipe = getRecipeVals()
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}
//
function displayEditForm() {
  let name = document.getElementById("nameHeader").innerText
  let description = document.getElementById("recipeDescription").innerText
  let ingredientsNodes = document.getElementsByName("ingredientsList")
  let ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}
//
function getRecipeVals() {
  var singleIngredients = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<singleIngredients.length;i++) {
    if(singleIngredients[i].value !== "") {
      ingredients.push(singleIngredients[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}
//
function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
