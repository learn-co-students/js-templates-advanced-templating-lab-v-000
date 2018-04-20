function displayEditForm(){
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  let html = template();
}

function createRecipe(){
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let html = template();
}

function updateRecipe(){
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  let html = template();
}


function init() {
  //put any page initialization/handlebars initialization here
    Handlebars.registerHelper('displayIngredient', function() {
      return new Handlebars.SafeString('<li> + this.ingredients + </li>')
    })

    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
    Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
