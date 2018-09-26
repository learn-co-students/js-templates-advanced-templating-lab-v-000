function init() {
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.ingredient)
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderMain() {
    let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  }

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderMain() {
    let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  }
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function updateRecipe() {
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}
