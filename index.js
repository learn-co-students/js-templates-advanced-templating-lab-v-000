function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li> + ingredient + </li>')
  })
}

function createRecipe() {
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value
  let ingredients = document.getElementsByName('ingredients')
  let recipe = {name, ingredients, description}
  let recipeTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  let result = recipeTemplate(recipe)
  document.getElementsByTagName("main")[0].innerHTML += result
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
