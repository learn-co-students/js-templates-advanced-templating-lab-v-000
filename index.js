function init() {
  //put any page initialization/handlebars initialization here
  //display ingredients helper
  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial"))
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
