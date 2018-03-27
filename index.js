function init() {
  //put any page initialization/handlebars initialization here
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitType': 'createRecipe()'})
  Handlebars.registerHelper('displayIngredient',  function(ingredient) {
      return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
    })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  const ingredientsNodes = document.getElementsByName("ingredients")
  let ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  // ingredientsNodes.forEach(
  //   function(ingredientNode) {
  //     if(ingredientNode.value !== ""){
  //       ingredients.push(ingredientNode.value)
  //     }
  // })
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const recipe = {name, ingredients, description}
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML = result
}

function displayEditForm() {
  let template = document.getElementById("recipe-form-template").innerHTML
  const ingredientsNodes = document.getElementsByName("ingredients")
  let ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].innerHTML)
    }
  }
  // ingredientsNodes.forEach(
  //   function(ingredientNode) {
  //     if(ingredientNode.innerHTML !== ""){
  //       ingredients.push(ingredientNode.innerHTML)
  //     }
  // })
  const name = document.getElementById("name").innerHTML
  const description = document.getElementById("description").innerHTML
  const recipe = {name, ingredients, description, submitType: 'updateRecipe()'}
  const template2 = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  const result = template2(recipe)
  document.getElementsByTagName("main")[0].innerHTML = result
}

function updateRecipe(){
  const ingredientsNodes = document.getElementsByName("ingredients")
  let ingredients = []
  for(let i=0;i<ingredientsNodes.length;i++) {
  ingredients.push(ingredientsNodes[i].value)
  }
  // ingredientsNodes.forEach(
  //   function(ingredientNode) {
  //     if(ingredientNode.value !== ""){
  //       ingredients.push(ingredientNode.value)
  //     }
  // })
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const recipe = {name, ingredients, description}
  const recipeTemplate = document.getElementById("recipe-template").innerHTML
  const template = Handlebars.compile(recipeTemplate)
  document.getElementsByTagName("main")[0].innerHTML= template(recipe)
}
