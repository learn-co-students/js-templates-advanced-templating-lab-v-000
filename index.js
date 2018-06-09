function initForm() {
  // 3. display form for creating new recipe.
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  // 4. this is called when clicking submit button for creating recipe.
  var recipe = getRecipeVals() // 5. organize the input values
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  // 6. this brings the other template for view, different one from the form for creating.
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe) // 7. recipe displayed
}

function updateRecipe() {
  // 11. when edit form is submitted, do the same action as creating recipe.
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  // 8. on view template, when clicking 'edit' button, it calls this function.
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'}
  // 9. organize data, supply updateRecipe function
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  // 10. use the same template as creating new one, as per conditional statement in the template, will display the value
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function handlebarsSetup() {
  // 2. Partial Handlebars registration
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  // 1. setting up Handlebars partial registration
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})