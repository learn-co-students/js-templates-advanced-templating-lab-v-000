// var recipe = {
//   name: 'name',
//   description: 'description',
//   ingredients: [
//     {name: 'chicken'},
//     {name: 'stock'},
//     {name: 'noodles'},
//     {name: 'noodles'},
//     {name: 'noodles'}
//   ]
// }
//
// function handlebarsSetup() {
//   Handlebars.registerHelper('displayIngredient', function(ingredient) {
//      return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
//    })
//   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
// }
//
//
// function init() {
//   var recipeTemplate = document.getElementById("recipe-form-template").innerHTML;
//   var templateFn = Handlebars.compile(recipeTemplate);
//   document.getElementsByTagName('main')[0].innerHTML = templateFn()
//   //put any page initialization/handlebars initialization here
// }
//
//
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   init()
// })
//
//
// function createRecipe() {
//   var name = document.getElementById("name").value;
//   var description = document.getElementById("description").value;
//   var ingredients = [];
//         for (const ingr of document.getElementsByName("ingredients"))
//         {
//           if (ingr !== "")
//           {ingredients.push(ingr)}
//         }
//   //create template string
//   var recipeShowTemplate = document.getElementById("recipe-template").innerHTML;
//     //create template function
//
//   var showTemplateFn = Handlebars.compile(recipeShowTemplate);
//
//   var addShowRecipeDiv = document.getElementById("main");
//   //execute template function with JSON object for the interpolated values
//   var templateHTML = showTemplateFn({ 'name': name, 'description': description, 'ingredients': ingredients});
//
//   //append rather than replace!
//   addShowRecipeDiv.innerHTML += templateHTML;
// }
//
//
// function displayEditForm() {
//   var name = document.getElementById("name").innerText
//    var description = document.getElementById("description").innerText
//    var ingredientsNodes = document.getElementsByName("ingredients")
//    var ingredients = []
//    for(var i=0;i<ingredientsNodes.length;i++) {
//      ingredients.push(ingredientsNodes[i].innerText)}
//
//   var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
//
//   var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
//   var template = Handlebars.compile(recipeFormTemplate)
//   document.getElementById("main").innerHTML = template(recipe)
// }
//
// function updateRecipe() {
//   var recipe = getRecipeVals()
//   var recipeTemplate = document.getElementById("recipe-template").innerHTML
//   var template = Handlebars.compile(recipeTemplate)
//   document.getElementById("main").innerHTML = template(recipe)
// }
//
// function getRecipeVals() {
//   var ingredientsNodes = document.getElementsByName("ingredients")
//   var ingredients = []
//   for(var i=0;i<ingredientsNodes.length;i++) {
//     if(ingredientsNodes[i].value !== "") {
//       ingredients.push(ingredientsNodes[i].value)
//     }
//   }
//   var name = document.getElementById("name").value
//   var description = document.getElementById("description").value
//   var recipe = {name, ingredients, description}
//   return(recipe)
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
