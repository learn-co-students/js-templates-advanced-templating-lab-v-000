function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(`<li name='ingredients'>${ingredient}</li>`)
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-template').innerHTML) 
  displayEditForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  let result = template();
  document.getElementById('main').innerHTML = result;

}

function getValues() {
  let ingredients = [].slice.call(document.getElementsByName('ingredients')).map(ingredient => {return ingredient.value})
  let recipe = {}
  recipe.ingredients = ingredients
  recipe.name = document.getElementById('name').value
  recipe.description = document.getElementById('description').value
  return recipe
}

function createRecipe() {
  let recipe = getValues();
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  document.getElementById('main').innerHTML = template(recipe)
}

function updateRecipe() {
  let recipe = getValues();
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  document.getElementById('main').innerHTML = template(recipe)
}