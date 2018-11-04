
function handleSubmit() {

}

function recipeFormPartialHtml() {
  let recipeForm = document.getElementById('recipe-form-template').innerHTML;
  // ingredients = document.getElementById('ingredients').value()
  // console.log(ingredients);
  let formTemplateFn = Handlebars.compile(recipeForm);
  document.getElementsByTagName("main")[0].innerHTML += formTemplateFn({"handleSubmit": null})
}

function recipeHelpers() {
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
//  Handlebars.registerPartial('recipeTemplate', document.getElementById("recipe-template").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  recipeHelpers()
  recipeFormPartialHtml()

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// HTML
//
// <script id="main-template" type="text/x-handlebars-template">
//   {{> namePartial }}
// </script>
// <script id="partial-template" type="text/x-handlebars-template">
//   <div>{{ name }}</div>
// </script>
//
// JS
// Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML)
// function renderMain() {
//   let template = document.getElementById("main-template").innerHTML;
//   let templateFunction = Handlebars.compile(template);
//   let html = templateFunction({name: 'Gordon Ramsay'});
// }
