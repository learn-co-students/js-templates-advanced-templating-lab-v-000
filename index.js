function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  
  let recForm = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  let mainDoc = document.getElementById('main')
  
  mainDoc.innerHTML += recForm()
  

  
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })
  
}

  //put any page initialization/handlebars initialization here
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function getRecVal() {
  const a = document.getElementsByName('ingredients')
  let ingredients = []
  for(const x of a) {
    if(!!x.value) {
      ingredients.push(x.value)
    }
  }
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let recipe = {ingredients, name, description}
  return recipe
}

function getRecValEd() {
  const a = document.getElementsByName('ingredients')
  let ingredients = []
  for(const x of a) {
    if(!!x.innerHTML) {
      ingredients.push(x.innerHTML.trim())
    }
  }
  let name = document.getElementById("name").innerHTML.trim()
  let description = document.getElementById("description").innerHTML.trim()
  let recipe = {ingredients, name, description}
  console.log(recipe)
  return recipe
}


function createRecipe() {
    let recTemp = document.getElementById('recipe-template').innerHTML
    let template = Handlebars.compile(recTemp)
    document.getElementById('main').innerHTML = template(getRecVal())
}

function displayEditForm() {
  let rec = getRecValEd()
  let edForm = document.getElementById('recipe-form-template').innerHTML
  const template = Handlebars.compile(edForm)
  document.getElementById('main').innerHTML = template(rec)
}

function updateRecipe() {
  var recipe = getRecValEd()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}