function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function (ingredient) {
    return ingredient.name;
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)



}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm() {
  const template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)

}

function createRecipe() {
  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
}

function updateRecipe() {
  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
}
