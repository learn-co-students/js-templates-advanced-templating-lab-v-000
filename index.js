// responsible for displaying original form
// recipe form template prints the template, and the included partial
function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}
// createRecipe()and updateRecipe() are identical
function createRecipe() {
  // grab raw data values that we entered
  var recipe = getRecipeVals()

  //grab the html of the template we want to display
  var recipeTemplate = document.getElementById("recipe-template").innerHTML

  //create the template function
  var template = Handlebars.compile(recipeTemplate)

  // replace the html at "main" with the template which was invoked with its values here
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  // grab the raw data that was printed to the screen from either creating or updating the recipe. 
  // these html values have different identifiers than what was used to grab the values in getRecipeValues
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  // iterate thrugh all ingredients printed to the screen based on length on array "ingredientsNodes"
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }
  // compile all raw data into a nice organized object. Upon invokation of the template function, the createRecipe() function will be triggered. 
  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  // iterate through all ingredient fields until we get to an empty one, and push into an array. 
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  //grabbing raw data from the form 
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  //return the raw data as an organized object. 
  var recipe = {name, ingredients, description}
  return(recipe)
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  // HELPER METHOD TO DISPLAY INGREDIENTS. 
  // we use safeString so we can insert the HTML without them being escaped. 
  // we label the values so we can pull them into the displayEditForm. (aka they print to page, then we grab values and insert into the edit form)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  // Registering 2 partials
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
