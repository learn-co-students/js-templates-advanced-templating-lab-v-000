//
// function handleSubmit() {
//
// }
//
// function recipeFormPartialHtml() {
//   let recipeForm = document.getElementById('recipe-form-template').innerHTML;
//   // ingredients = document.getElementById('ingredients').value()
//   // console.log(ingredients);
//   let formTemplateFn = Handlebars.compile(recipeForm);
//   document.getElementsByTagName("main")[0].innerHTML += formTemplateFn({"handleSubmit": null})
// }
//
// function recipeHelpers() {
//   Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
//   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
// //  Handlebars.registerPartial('recipeTemplate', document.getElementById("recipe-template").innerHTML)
// }
//
// function init() {
//   //put any page initialization/handlebars initialization here
//   recipeHelpers()
//   recipeFormPartialHtml()
//
// }
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   init()
// })

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



function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
