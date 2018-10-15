function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(){
     return new Handlebars.SafeString("<li>"+ ingredients + "</li>")
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
}

function createRecipe(){
var name = document.getElementById('name').value
var description = document.getElementById('description').value
var ingredients = document.getElementsByName('ingredients')

var recipeTemplate= Handlebars.compile(document.getElementById('recipe-template').innerHTML)
var recipeInfo= recipeTemplate({'name':name, 'description': description, 'ingredients':ingredients})
var recipeHTML = recipeTemplate(recipeInfo)

var mainDiv = document.getElementById('main')

mainDiv.innerHTML = recipeInfo
}

function displayEditForm() {
    var name = document.getElementById('recipeName').innerText
    var description = document.getElementById('recipeDescription').innerText
    var ingredientNodes = document.getElementsByName('ingredients')
      var ingredients = [];

      for(var i=0; i<ingredientNodes.length; i++){
        if (ingredientNodes[i].value !==''){
          ingredients.push(ingredientNodes[i].value)
        }
      }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}


function updateRecipe(){
  var name = document.getElementById('recipeName').innerText
  var description = document.getElementById('recipeDescription').innerText
  var ingredients = document.getElementsByName('ingredients')

  var recipeTemplate= Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  var recipeInfo= recipeTemplate({'name':name, 'description': description, 'ingredients':ingredients})
  var recipeHTML = recipeTemplate(recipeInfo)

  var mainDiv = document.getElementById('main')

  mainDiv.innerHTML = recipeInfo
}
