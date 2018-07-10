function init() {
  //put any page initialization/handlebars initialization here
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += recipeFormTemplate({ 'onsubmit': 'createRecipe();' })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {
    if(this != "") {
      return new Handlebars.SafeString(`<li class="recipeIngredients">` + this + `</li>`)
    }
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function formInput() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredients = []
  let ingredientsValues = document.getElementsByName("ingredients")

  for(let i = 0; i < ingredientsValues.length; i++) {
    ingredients.push(ingredientsValues[i].value)
  }

  return { 'name': name, 'description': description, 'ingredients': ingredients }
}

function createRecipe() {
  // not sure how to refactor these template queries. hmmm
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate(formInput())
}

function displayEditForm() {
  let name = document.getElementById("recipeName").innerHTML
  let description = document.getElementById("recipeDescription").innerHTML
  let ingredients = []
  let ingredientsValues = document.getElementsByClassName("recipeIngredients")
  for(let i = 0; i < ingredientsValues.length; i++) {
    ingredients.push(ingredientsValues[i].innerHTML)
  }

  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("recipe-form-div").innerHTML = recipeFormTemplate({ 'onsubmit': 'updateRecipe();', 'name': name, 'description': description, 'ingredients': ingredients })
}


function updateRecipe() {
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("recipe").innerHTML = recipeTemplate(formInput())
}
