function init() {

  // to render the recipe form
  let formTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'handleSubmit': 'createRecipe()'})


  // receipe partial
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  // custom helper to help display description and ingredients
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
}


function handleSubmit() {
  // get the values of the input
  let recipe = getInputValues()
  // put those values into object notation

  let formTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(formTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}


function getInputValues() {
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value

  let ingredients = document.getElementsByName('ingredients')
  let ingredientsArr = []
  for(i = 0; i < ingredients.length; i++) {
    if(ingredients[i].value != "") {
      ingredientsArr.push(ingredients[i].value)
    }
  }

  let recipe = {name, description, ingredientsArr}
  return recipe
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
