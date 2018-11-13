function initForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate)

  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'handleSubmit()'})
}


function handleSubmit() {
  let recipe = getRecipe()
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)

  document.getElementById("main").innerHTML = template(recipe)
}


function updateRecipe() {
  let recipe = getRecipe()
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)

  document.getElementById("main").innerHTML = template(recipe)
}


function displayEditForm() {
  let name = document.getElementById("name").innerText
  let description = document.getElementById("description").innerText
  let ingredientsNodes = document.getElementsByName("ingredients")
  let ingredients = []

  for(let i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  let recipe = {name, description, ingredients, submitAction: 'updateRecipe()'}

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(recipeFormTemplate)

  document.getElementById("main").innerHTML = template(recipe)
}


function getRecipe() {
  let ingredientsNodes = document.getElementsByName("ingredients")
  let ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let recipe = {name, ingredients, description}
  return(recipe)
}


function handlebarsSetup() {
  //handlebars registrations
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
