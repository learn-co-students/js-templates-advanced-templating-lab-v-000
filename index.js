function init() {
  //put any page initialization/handlebars initialization here



  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)


  let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById('main').innerHTML = formTemplate({fn: "createRecipe()", recipe: {name: "", description: "", ingredients: []}})

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})





function createRecipe(){
  let recipe = document.querySelectorAll('[id=main]');
  let formTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName('main')[0].innerHTML += formTemplate(recipe)
}



function updateRecipe(){
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let name = document.getElementById("name")
  let description = document.getElementById("description")
  let ingredient = document.getElementsByName("ingredient")
}








function displayEditForm(){
  let name = document.getElementById('recipe-name').value
  let description = document.getElementById('recipe-description').value
  let ingredientItems = document.getElementsByName('ingredients')
  let ingredients = []
  for (let i = 0; i < ingredientItems.length; i++) {
    if (ingredientItems[i].value !== ""){
    ingredients << ingredientItems[i].innerText
    }
  }
  let recipe = {action: "updateRecipe()", name, description, ingredients}

  let recipeForm = document.getElementById('recipe-form-template').innerHTML
  let recipeFormComp = Handlebars.compile(recipeForm)
  document.getElementsByTagName('main')[0].innerHTML = recipeFormComp(recipe)
}


      


      