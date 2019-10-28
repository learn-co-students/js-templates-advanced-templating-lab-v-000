function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(ingredient)
  })

  Handlebars.registerHelper('correctFormFunction', function(){
    let recipesDiv = selectRecipesDiv()
    let recipeInfo = recipesDiv.childNodes
    debugger
    if (recipeInfo.length > 0) {
      debugger
      return new Handlebars.SafeString(`updateRecipe();`)
    } else {
      debugger
      return new Handlebars.SafeString(`createRecipe();`)
    }
  })

loadRecipeForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// main variables

//MAIN FUNCTIONS

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
  // debugger
  let recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  // debugger
  let result = recipeTemplate(recipe)
  debugger
  recipesDiv.innerHTML += result

  let main = document.querySelector("main")

  let recipeForm = getExistingRecipeForm()
  main.removeChild(recipeForm)
}

function displayEditForm(recipe) {
  debugger
  loadRecipeForm()
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

}

function updateRecipe(){
  let recipeNameVar = document.querySelector('form#recipe-form input#name').value
  // debugger
  let recipeDescriptionVar = document.querySelector('textarea#description').value
  // debugger
  let recipeIngredientsNodeList = document.getElementsByName('ingredients')
  let recipeIngredientsArr = convertNodeListToArray(recipeIngredientsNodeList)
  let recipeObject = createObjectFromRecipe(selectRecipesDiv())
  recipeObject.name = recipeNameVar
  recipeObject.description = recipeDescriptionVar
  recipeObject.ingredients = recipeIngredientsArr

  let recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  // debugger
  let result = recipeTemplate(recipeObject)
  debugger
  let recipesDiv = selectRecipesDiv()
  debugger
  recipesDiv.innerHTML = result
}

//helpers

function createObjectFromRecipe(recipesDiv){
  let recipeInfo = recipesDiv.childNodes
  let recipeObj = {}
  debugger
  recipeObj.name = recipeInfo[1].innerText
  recipeObj.description = recipeInfo[3].innerText

  recipeObj.ingredients = []
  let ingredientsList = recipeInfo[7].children
  for (let ingredient of ingredientsList) {
    recipeObj.ingredients.push(ingredient.innerHTML)
  }
  debugger
  return recipeObj
}

function getExistingRecipeForm(){
  let recipeForm = document.getElementById('recipe-form')
  return recipeForm
}

function selectRecipesDiv() {
  let recipesDiv = document.getElementById('recipes')
  return recipesDiv
}
