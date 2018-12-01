function init() {
  //put any page initialization/handlebars initialization here
  renderForm()
  Handlebars.registerHelper('displayIngredient', function(i){
    return new  Handlebars.SafeString('<li name="ingredients">' + i + "</li>")

  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function renderForm(){
  let formTemp = document.getElementById("recipe-form-template").innerHTML
  let tempFn = Handlebars.compile(formTemp)
  document.getElementById("main").innerHTML = tempFn({'submitAction':'handleSubmit()'})
}

function handleSubmit(){
  let template = document.getElementById("recipe-template").innerHTML
  let templateFn = Handlebars.compile(template)
  let name = document.getElementById('name').value
  let description = document.getElementById('description').value
  let allIngredients = document.getElementsByName('ingredients')
  let ingredients = []
  for(let i = 0; i<allIngredients.length; i++){
    ingredients.push(allIngredients[i].value)
  }
  let recipe = {name, description, ingredients}
  document.getElementById("main").innerHTML = templateFn(recipe)

}

function displayEditForm(){
  let template = document.getElementById("recipe-form-template").innerHTML
  let templateFn = Handlebars.compile(template)
  let name = document.getElementById('name').innerHTML
  let description = document.getElementById("description").innerHTML
  let allIngredients = document.getElementsByName('ingredients')
  let ingredients = []
  for(let i = 0; i<allIngredients.length; i++){
    ingredients.push(allIngredients[i].innerHTML)
  }
  let recipe = {name, description, ingredients, submitAction: 'handleSubmit()'}
  document.getElementById("main").innerHTML = templateFn(recipe)
}
