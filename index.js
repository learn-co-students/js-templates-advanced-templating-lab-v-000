function initForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  debugger
  let recipeTemplate = document.getElementById('recipe-template').innerHTML
  let template = Handlebars.compile(recipeTemplate)

  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredients = document.getElementsByName('ingredients');

  document.getElementById('main').innerHTML = template({'name': name, 'description': description, 'ingredients': ingredients})
}

function displayEditForm() {
  let name = document.getElementById('name').innerHTML
  let description = document.getElementById('description').innerHTML
  let ingredientsNodes = document.getElementsByName("ingredientsList")
  let ingredients = []
  for(let i = 0;i < ingredientsNodes.length; i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  let template = Handlebars.compile(recipeFormTemplate)

  document.getElementById('main').innerHTML = template({'name': name, 'description': description, 'ingredients': ingredients, 'submitAction': 'updateRecipe()'})

}

function updateRecipe() {
  createRecipe()
}
function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient.value + '</li>')
  })
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
