function init() {
  //put any page initialization/handlebars initialization here
  var recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  // want to do var result = template(recipe)-but too much functionality here to create recipe here?
  // document.getElementsByTagName("main")[0].innerHTML += result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init() // this is where init comes into play-don't need to call anywhere else
})

function handleSubmit() {
  let ingredientArray = document.querySelectorAll('ingredient');

  var recipe = {
    recipeName: document.getElementById('recipeName').innerHTML,
    recipeDescription: document.getElementById('recipeDescription').innerHTML,
    recipeIngredients: [
      for(const ingredient of ingredientArray) {
        ingredient.innerHTML;
      }
    ]
  }
}
