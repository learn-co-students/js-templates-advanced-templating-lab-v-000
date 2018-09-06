function init() {
  //put any page initialization/handlebars initialization here
  //display ingredients helper
  Handlebars.registerHelper('displayIngredient', function () {

  })

  Handlebars.registerPartial('recipeDetailsPartial')
  Handlebars.registerPartial('recipeFormPartial',
    Ingredients: <input type="textarea" name="ingredients">
    Name: <input type="text" id="name">
    <input type="submit">
  )
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
