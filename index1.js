function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {
    let ingredients = this.ingredients 
    for(let ingredient in ingredients) {
      return new Handlebars.SafeString(ingredient)
    }
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe(){
  // console.log(event.target)
  let test = document.getElementById('receipe-template').innerHTML 
  let testHTML = Handlebars.compile(test)
  console.log(testHTML)
}

function displayEditForm(){
  // renders a template called 'recipe-form-template'
//   On click of your "Edit Recipe" link, call a displayEditForm() function that renders a template called recipe-form-template. Allow your recipe to be edited using this form, and re-render the recipe template with the updated information using a updateRecipe() function on form submit.
}

function updateRecipe(){

}