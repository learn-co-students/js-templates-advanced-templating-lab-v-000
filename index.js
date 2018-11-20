// INITIALIZATION & HANDLEBARS
function init() {
  //put any page initialization/handlebars initialization here
  renderInitialForm()
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// display new recipe FORM
function renderInitialForm() {
  let formTemplate  = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate)
  document.getElementById("main").innerHTML = template({'submitAction': 'handleSubmit()'})
}

// CREATE recipe and SHOW
function handleSubmit() {
  let recipe = createRecipeObject()
  let template = document.getElementById('recipe-template').innerHTML
  let templateFx = Handlebars.compile(template)
  document.getElementById("main").innerHTML = templateFx(recipe)
}

// create recipe OBJECT with collected VALUES
function createRecipeObject() {
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value
  let ingredients = []
  let ingredientCollection = document.getElementsByName('ingredients')
  ingredientCollection.forEach(function(ingredient) {
    if(ingredient !== ""){
      ingredients.push(ingredient.value)
    }
  })
  let recipe = {name, description, ingredients}
  return recipe
}

// display new recipe FORM + existing HTML text
function displayEditForm() {
  let name = document.getElementById('name').innerText
  let description = document.getElementById('description').innerText
  let ingredients = []
  let ingredientCollection = document.getElementsByName('ingredients')
  ingredientCollection.forEach(function(ingredient) {
    ingredients.push(ingredient.innerText)
  })
  let recipe = {name, description, ingredients, submitAction: 'handleSubmit()'}

  let template = document.getElementById("recipe-form-template").innerHTML
  let templateFx = Handlebars.compile(template)
  document.getElementById("main").innerHTML = templateFx(recipe)
}
