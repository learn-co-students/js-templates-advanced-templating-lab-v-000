function init() {
  //put any page initialization/handlebars initialization here
  let recipeForm = document.getElementById('recipe-form-template').innerHTML
  let template = Handlebars.compile(recipeForm)
  document.getElementsByTagName('main')[0].innerHTML = template()

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + "</li>");
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let inputs = document.getElementsByName('ingredients')
  let ingredients = []
  for (var i = 0; i < inputs.length; i++) {
    ingredients.push(inputs[i].value)
  }
  let recipe = {name, description, ingredients}

  let recipeTemplate = document.getElementById('recipe-template').innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}

function displayEditForm() {
  let name = document.getElementById('name').innerText
  let description = document.getElementById('description').innerText
  let inputs = document.getElementsByName('ingredients')
  let ingredients = []
  for (var i = 0; i < inputs.length; i++) {
    ingredients.push(inputs[i].innerText)
  }
  let recipe = {name, description, ingredients}

  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
  let template = Handlebars.compile(recipeFormTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}
