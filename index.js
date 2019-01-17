function init() {
  //put any page initialization/handlebars initialization here
  let recipeFormFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  let recipeFormHTML = recipeFormFn()
  let main = document.querySelector('main')
  main.innerHTML += recipeFormHTML

  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById('recipe-details-partial').innerHTML)

  Handlebars.registerHelper('displayIngredient',
    function(ing){
      let ingFn = Handlebars.compile(document.getElementById('display-ingredient-helper').innerHTML)
      return ingFn({ingredient:ing})
  }
)
// return `<li name="ingredients">${ing.value}</li>`

}

function handleSubmit(){
  let recipeName = document.getElementById('name').value
  let recipeDesc = document.getElementById('description').value
  let recipeIngs = document.getElementsByName('ingredients')

  let recipeFn =  Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let recipeHTML = recipeFn({name:recipeName, description:recipeDesc, ingredients:recipeIngs})
  let main = document.querySelector('main')
  main.innerHTML = recipeHTML
}

function displayEditForm(){
  let recipeFormFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
