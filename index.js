function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)


  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML += template()

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li>' + ingredient + '</li>')
  })
}

function createRecipe() {
  let recipe = getRecipeItems()
  let recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  debugger
  document.getElementsByTagName("main").innerHTML = recipeTemplate(recipe)

}

function displayEditForm(){
  let recipe = getRecipeItems()
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
    document.getElementsByTagName("main").innerHTML = recipeTemplate(recipe)
}

function updateRecipe() {
  let recipe = getRecipeItems()
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
    document.getElementsByTagName("main").innerHTML = recipeTemplate(recipe)
}

function getRecipeItems() {
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value
  let ingredientsNodes = document.getElementsByName('ingredients')
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  let recipe = {name, ingredients, description}
  return recipe
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
