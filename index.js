function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(){
    if (this != "") {
      return new Handlebars.SafeString('<li>' + this + '</li>')
    }
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-template').innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = makeRecipe();
  var showRecipe = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = showRecipe(recipe);
  document.getElementsByTagName('main').innerHTML = result;
}

function updateRecipe() {
  var recipe = makeRecipe();
  console.log("in update recipe", recipe)
  var showRecipe = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var result = showRecipe(recipe);
  document.getElementsByTagName('main').innerHTML = result;
}

function makeRecipe() {
  var recipe = {
    name: "",
    description: "",
    ingredients: []
  }
  recipe.name = document.getElementsByName('name')[0].value
  recipe.description = document.getElementsByName('description')[0].value
  console.log(`In make recipe:`, recipe)
  let ings = document.getElementsByName('ingredients')
  for (let i=0; i < ings.length; i++) { recipe.ingredients.push(ings[i].value) }

  return recipe;
}

function displayEditForm() {
  var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = template(this);
  document.getElementsByTagName('main').innerHTML += result;
}
