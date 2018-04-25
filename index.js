function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {

  })

  function loadForm() {
    debugger;
    let recipeFormTemplate = _.template(document.getElementById('recipe-form-template').innerHTML)
    let main = document.getElementById('main').innerHTML
    main = recipeFormTemplate;
  }

  function createRecipe() {

  }

  function displayEditForm() {

  }

  function updateRecipe() {

  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
