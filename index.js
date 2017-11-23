function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient)
  })
  loadRecipeForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function convertNodeListToArray(nodeList){
  let newArray = []
  for (let node of nodeList) {
    let theValue = node.value
    newArray.push(theValue)
  }
  return newArray
}

function loadRecipeForm(){
  let main = document.querySelector("main")
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  let result = recipeFormTemplate()
  // debugger
  main.innerHTML += result
}

function addIngredientField(){
  let ingredientsFieldsDiv = document.getElementById("ingredients-fields")
  ingredientsFieldsDiv.innerHTML += "<input type='text' name='ingredients'><br>\n"
}

function createRecipe(){
  debugger
  let recipeNameVar = document.querySelector('form#recipe-form input#name').value
  // debugger
  let recipeDescriptionVar = document.querySelector('textarea#description').value
  // debugger
  let recipeIngredientsNodeList = document.getElementsByName('ingredients')
  let recipeIngredientsArr = convertNodeListToArray(recipeIngredientsNodeList)
  // debugger
  let recipe = {
    name: recipeNameVar,
    description: recipeDescriptionVar,
    ingredients:recipeIngredientsArr
  }
  // debugger
  let recipesDiv = document.getElementById('recipes')
  debugger
  let recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  debugger
  let result = recipeTemplate(recipe)
  recipesDiv.innerHTML += result
}

function displayEditForm(){

}
