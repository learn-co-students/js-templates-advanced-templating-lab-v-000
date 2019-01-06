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
