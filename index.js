function init() {
  //put any page initialization/handlebars initialization here
function handleSubmit(){
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  var result = template()
document.getElementsByTagName("main")[0].innerHTML += result

}

Handlebars.registerPartial("recipeDetailsPartial",document.getElementById("recipe-details-partial").innerHTML)

Handlebars.registerHelper("displayIngredient", function(ingredient){
  return new Handlebars.SafeString('<li name="ingredients">' +ingredient + "</li>")
})

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit(){
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let recipeObject = {}
  recipeObject.name = document.getElementById("name").value
  recipeObject.description = document.getElementById("description").value
    recipeObject.ingredients = []

  let ingredientsArray = document.getElementsByName("ingredients")
  for (let i = 0; i < ingredientsArray.length; i++){
    recipeObject.ingredients.push(ingredientsArray[i].value)
  }

  let result = template(recipeObject)
document.getElementsByTagName("main")[0].innerHTML += result

}

function displayEditForm(){
let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
let editObject = {}
editObject.name = document.getElementById("nameOnSite").innerText
editObject.description = document.getElementById("recipeDescription").innerText
let tempArray = Array.from(document.getElementsByName("ingredients"))

let ingredientsArray = tempArray.slice(3)

editObject.ingredient1 = ingredientsArray[2].innerText
editObject.ingredient2 = ingredientsArray[3].innerText

editObject.ingredient3 = ingredientsArray[4].innerText

editObject.ingredient4 = ingredientsArray[5].innerText

editObject.ingredient5 = ingredientsArray[6].innerText
let nameField = document.getElementById("name").value
let result = template(editObject)
document.getElementsByTagName("main")[0].innerHTML = result
debugger

}
