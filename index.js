
function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingr){ return
  `<div class="displayIngredient>${ingr}</div>">`
   });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()

  var main = document.getElementsByTagName('main')[0]
  var recipeFormSource = document.getElementById("recipe-form-template").innerHTML;
  var recipeFormTemplate = Handlebars.compile(recipeFormSource)
  main.innerHTML += recipeFormTemplate()

})

 function createRecipe(){
   var name = document.getElementById("name").value
   var description = document.getElementById("description").value
   var ingredientsList = document.getElementsByClassName('ingredients')
   var ingredients = []
   for(var i = 0; i < ingredientsList.length; ++i) ingredients.push(ingredientsList[i].value)
   var main = document.getElementsByTagName("main")[0]

   var source   = document.getElementById("recipe-template").innerHTML
   var recipeTemplate = Handlebars.compile(source)
   var context = {name: name,
                  ingredients: ingredients,
                  description: description }
   var recipeHtml = recipeTemplate(context)
   
   debugger;
   main.innerHTML += recipeHtml
 }

 function displayEditForm(){

 }

 function updateRecipe(){

 }
