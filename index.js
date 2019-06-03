
function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()

  var main = document.getElementsByTagName('main')[0]
  var recipeFormSource = document.getElementById("recipe-form-template").innerHTML;
  var recipeFormTemplate = Handlebars.compile(recipeFormSource)
    var submitType = 'createRecipe()'
  main.innerHTML += recipeFormTemplate({submitType})

})

function getRecipeValues(){
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredientsList = document.getElementsByClassName('ingredients')
  var ingredients = []
  for(var i = 0; i < ingredientsList.length; ++i){
    if (ingredientsList[i].value != ''){
    ingredients.push(ingredientsList[i].value)
    }
  }
  var submitType = 'createRecipe()'
  return {name, ingredients, description, submitType}
}

function getRecipeValuesforEdit(){
  var name = document.getElementById("name").innerHTML
  var description = document.getElementById("description").innerHTML
  var ingredientsList = document.getElementsByName('ingredientsList')
  var ingredients = []
  for(var i = 0; i < ingredientsList.length; ++i){
    if (ingredientsList[i].innerHTML != ''){
    ingredients.push(ingredientsList[i].innerHTML)
    }
  }
  var submitType = 'updateRecipe()'
  return {name, ingredients, description, submitType}
}

 function createRecipe(){
   var source   = document.getElementById("recipe-template").innerHTML
   var recipeTemplate = Handlebars.compile(source)
   var context = getRecipeValues()
   var recipeHtml = recipeTemplate(context)
   var main = document.getElementById("main")
   main.innerHTML = recipeHtml
 }

 function displayEditForm(){
    var context = getRecipeValuesforEdit()
    var recipeFormSource = document.getElementById("recipe-form-template").innerHTML;
    var recipeFormTemplate = Handlebars.compile(recipeFormSource)
    document.getElementById('main').innerHTML = recipeFormTemplate(context)
 }

 function updateRecipe(){
   createRecipe()
 }
