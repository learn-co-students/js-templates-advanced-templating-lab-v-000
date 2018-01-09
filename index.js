  function initForm() {
    var formTemplate = document.getElementById("recipe-form-template").innerHTML
    var template = Handlebars.compile(formTemplate);
    var result = template({name: 'name', description: 'description', ingredients: 'displayIngredient'});
    document.getElementById("main").innerHTML += result;
  }

function createRecipe() {
  var formTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  var result = template({name: 'name', description: 'description', ingredients: 'displayIngredient'});
  document.getElementById("main").innerHTML += result;
}

function displayEditForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  var result = template({name: 'name', description: 'description', ingredients: 'displayIngredient'});
  document.getElementById("main").innerHTML += result;
}

function updateRecipe() {
  var formTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  var result = template({name: 'name', description: 'description', ingredients: 'displayIngredient'});
  document.getElementById("main").innerHTML += result;
}

function init() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li>' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)


  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  initForm()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
