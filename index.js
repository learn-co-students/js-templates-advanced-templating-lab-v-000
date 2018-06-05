function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {
    return this.name
   })

  function loadForm(){
    const blank = {
      name: "",
      description: "",
      ingredients: ["", "", "", "", ""],
      method: "createRecipe()"
    }
    const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
    document.getElementsByTagName("main")[0].innerHTML = template(blank)

  }
  loadForm()
 }
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  const name = document.getElementsByName("name")[0].value
  const description = document.getElementsByName("description")[0].value
  let ingredients = []
  const ingredientsObj = document.getElementsByClassName("ingredient")
  for(let i = 0; i < ingredientsObj.length; i++){
    ingredients.push({name: `${ingredientsObj[i].value}`})
  }
  const recipeObj = {
    name: name,
    description: description,
    ingredients: ingredients
  }
  showRecipe(recipeObj)
}

function showRecipe(obj){
   const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
   const html = template(obj)
   document.getElementById("main").innerHTML += html
}

function updateRecipe(){
  const name = document.getElementsByName("name")[0].value
  const description = document.getElementsByName("description")[0].value
  let ingredients = []
  const ingredientsObj = document.getElementsByClassName("ingredient")
  for(let i = 0; i < ingredientsObj.length; i++){
    ingredients.push({name: `${ingredientsObj[i].value}`})
  }
  const recipeObj = {
    name: name,
    description: description,
    ingredients: ingredients
  }
  showRecipe(recipeObj)
}

function displayEditForm(){
  const name = document.getElementById("name1").innerHTML
  const description = document.getElementById("description").innerHTML
  let ingredients = []
  const ingredientsObj = document.getElementsByClassName("ingredients")
  for(let i = 0; i < ingredientsObj.length; i++){
    ingredients.push({name: `${ingredientsObj[i].innerHTML}`})
  }
  const recipeObj = {
    name: name,
    description: description,
    ingredients: ingredients,
    method: "updateRecipe()"
  }
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template(recipeObj)

}
