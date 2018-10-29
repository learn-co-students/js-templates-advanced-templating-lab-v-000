function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this.value)
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  let initialForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML += initialForm()
}

function createRecipe() {
  let formName = document.getElementById("name").value
  let formDescription = document.getElementById("description").value
  let formIngredients = document.getElementsByName("ingredients")



  let recipe = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = recipe({name: formName, description: formDescription, ingredients: formIngredients})

}

function updateRecipe() {
  let formName = document.getElementById("name").value
  let formDescription = document.getElementById("description").value
  let formIngredients = document.getElementsByName("ingredients")



  let recipe = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = recipe({name: formName, description: formDescription, ingredients: formIngredients})
}

function displayEditForm() {
  let editName = document.getElementById("name").innerHTML
  let editDescription = document.getElementById("description").innerHTML

  let editIngredients = document.getElementsByTagName("li")

  let ing1 = editIngredients[0].innerHTML
  let ing2 = editIngredients[1].innerHTML


  let editRecipe = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = editRecipe({name:editName, description:editDescription, ingredients: editIngredients})
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
