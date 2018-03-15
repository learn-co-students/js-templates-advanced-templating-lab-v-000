var recipeDetails = {
  description: 'Chicken Noodles',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}
function updateRecipe () {
var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
var html = recipeTemplate(recipeDetails);
}

function createRecipe () {
var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
var html = recipeTemplate(recipeDetails);
}

function displayEditForm () {
  var recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}
var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
var html = template(recipe);
}
function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
