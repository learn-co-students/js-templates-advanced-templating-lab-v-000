function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}


function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'updateRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
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
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


// Create a form template with an id of recipe-form-template that will be used to enter new recipes. Make the form submit with a createRecipe() function. Provide inputs for recipe name, description, and at least five ingredients. Hint: Get comfy collecting values with getElementsByName().
// Create a template with an id of recipe-template. This template should contain the recipe name and an "Edit Recipe" link, and render the recipeDetailsPartial in step 3. Render this template with the recipe data when the user submits the form.
// Register a partial called recipeDetailsPartial for the description and ingredients of the recipe. Create a template with an id of recipe-details-partial to hold the markup. Use the each helper to display the collection of ingredients.
// Use a custom helper called displayIngredient to display each ingredient within the each block.
// On click of your "Edit Recipe" link, call a displayEditForm() function that renders a template called recipe-form-template. Allow your recipe to be edited using this form, and re-render the recipe template with the updated information using a updateRecipe() function on form submit.
// Refactor your forms so that recipe-form and the edit form template are both constructed with the same recipe-form-template. The template should render with the recipe data for edit, and with empty values for a new recipe. Hint: Don't forget you can pass any object with any properties as the context for your templates, including, for instance, values for onsubmit.
// Note: The provided index.js includes a function called init that will be called when the page loads. Put any Handlebars registration code and page initialization code you need inside this function or your tests will not function correctly.