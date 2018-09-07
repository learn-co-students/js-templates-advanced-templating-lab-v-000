function displayCreateForm() {
  var form = Handlebars.compile(document.getElementById("recipe-form-partial").innerHTML)
  document.getElementById("recipe-form").innerHTML += form('')
}

function createRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  var recipe = recipeValueCreate()
  var result = recipeTemplate(recipe)
  document.getElementById("main").innerHTML = result
}

function displayEditForm() {
  var editFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = editFormTemplate(recipeValueUpdate())
}

function updateRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  var recipe = recipeValueUpdate()
  var result = recipeTemplate(recipe)
  document.getElementsByTagName("main")[0].innerHTML = result
}

function recipeValueCreate () {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value
  }
  let ingArray = document.getElementsByName("ingredients")
  recipe['ingredients'] = []
  for (let i = 0; i < ingArray.length; i++) {
    recipe['ingredients'].push(ingArray[i].value)
  }
  return recipe
}

function recipeValueUpdate () {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value
  }
  let ingArray = document.getElementsByName("ingredients")
  recipe['ingredients'] = []
  for (let i = 0; i < ingArray.length; i++) {
    recipe['ingredients'].push(ingArray[i].innerHTML)
  }
  return recipe
}

function handlebarsSetUp () {
  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  //display ingredients helper
  handlebarsSetUp();
  displayCreateForm();
}



document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
