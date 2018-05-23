function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function (){
      return new Handlebars.SafeString('<li>'+this+'</li>')
    })
  //Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  // initForm()
}

function initForm(){
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe(){
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  var name = document.getElementById('name').value
  var description = document.getElementById('description').value
  var ingredients = document.getElementsByName('ingredients').map(function(ingredient){return ingredient.value})
  var recipe = {name, description, ingredients}
  document.getElementById('main').innerHTML += template(recipe)
}

function displayEditForm(){
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var submitAction = updateRecipe();

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

//
