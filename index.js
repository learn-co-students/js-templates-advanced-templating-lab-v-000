function createRecipe() {
  
}

function updateRecipe() {

}

function displayEditForm() {
  const recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML

}

// initialize create form and partials/helpers
function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipesDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li>" + ingredient + "</li>")
  })
  const formTemplate = document.getElementById("recipe-form-template").innerHTML
  const compiledTemplate = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = compiledTemplate({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
