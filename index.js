function init() {
  var recipe = {
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'}
    ]
  }
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  var template = Handlebars.compile(document.getElementById("my-template").innerHTML);

  var html = template(recipe);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
}

function getElementsByName() {
  var recipe = Handlebars.compile(document.getElementById("recipe-form").innerHTML);
  // var recipe = Handlebars.compile(document.getElementById("ingredients").innerHTML);
}

function displayEditForm() {
  var edit = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}
