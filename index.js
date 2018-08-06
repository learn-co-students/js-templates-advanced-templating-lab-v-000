function init() {
  //put any page initialization/handlebars initialization here
 handlebarsSetUp()
 createRecipe()
 displayEditForm()
 updateRecipe()
}
 document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
 function createRecipe() {
  var name = document.getElementById('name').value
  var description = document.getElementById('description').value
  var ingredients = document.getElementsByName('ingredients')
   let allIngredients = []
   for(let i = 0; i < ingredients.length; i++) {
    allIngredients.push(ingredients[i].value)
  }
   var recipe = {
    name: name,
    description: description,
    ingredients: allIngredients
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  //document.getElementsByTagName('main')[0].innerHTML = recipeForm()
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li>' + ingredient + '</li>')
  })
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
}
 function displayEditForm() {
  var recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName('main')[0].innerHTML = recipeForm()
 }
 function updateRecipe() {
  createRecipe()
}
 function handlebarsSetUp() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  var recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName('main')[0].innerHTML = recipeForm()
}
