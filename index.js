function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var recipeForm = recipeFormTemplate()
  document.getElementsByTagName('main')[0].innerHTML += recipeForm

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(`<li name="ingredients">${ingredient}</li>`)
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  var name = document.getElementById('recipe-form').elements.namedItem("name").value
  var description = document.getElementById('recipe-form').elements.namedItem("description").value
  var ingredientList = Array.from(document.getElementsByName("ingredients")).map(function(ingredient) {
    return ingredient.value
  })


  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  var recipe = recipeTemplate({name: name, description: description, ingredients: ingredientList})
  // debugger;
  document.getElementsByTagName('main')[0].innerHTML += recipe
}
