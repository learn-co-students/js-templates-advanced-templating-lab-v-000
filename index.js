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
let template = document.getElementById("recipe-form-template").innerHTML
// let name = document.getElementById("name").value
// let description = document.getElementById("description").value
// let ingredients = []
// let ingredientsArray = document.getElementsByName("ingredients")
// for (let i = 5; i < ingredientsArray.length; i++){
//   ingredients.push(ingredientsArray[i].value)
// }
document.getElementsByTagName("main")[0].innerHTML += template


}

function postAgain(){
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
