
function init() {
  //put any page initialization/handlebars initialization here
  
  const formTemplate = document.getElementById("recipe-form-template").innerHTML;
  const main = document.getElementById('main')
  main.innerHTML += formTemplate

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

  Handlebars.registerHelper('displayIngredient', function(item){
    if (item.value !== "") {
      return new Handlebars.SafeString(
        '<li>' + item.value + '</li>'
      )
    }
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  const name = document.getElementById('name').value
  const description = document.getElementById('description').value
  const ingredients = document.getElementsByName('ingredients')

  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  
  const html = template({name, description, ingredients})

  const main = document.getElementById('main')
  main.innerHTML += html
}

function displayEditForm() {

}

function updateRecipe() {
  const name = document.getElementById('name').value
  const description = document.getElementById('description').value
  const ingredients = document.getElementsByName('ingredients')
}
