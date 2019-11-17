function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)
  var recipeForm = recipeFormTemplate({ingredients: ["", "", "", "", ""]})
  document.getElementsByTagName('main')[0].innerHTML += recipeForm

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  Handlebars.registerHelper()
}

function displayEditForm() {
  // var formContents = {}
  // formContents.name = document.getElementById('recipeName').innerHTML.trim()
  // formContents.description = document.getElementById('recipeDescription').innerHTML.trim()
  // var ingredients = document.getElementsByName('ingredients')
  // formContents.ingredients = []
  // for (var i = 0; i < ingredients.length; i++) {
  //   formContents.ingredients.push(ingredients[i].innerHTML)
  // }
  //
  // // console.log(document.getElementsByName('ingredients'))
  // // console.log(ingredients)
  // var recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
  // var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate)
  // document.getElementById('main').innerHTML = recipeFormTemplateFn(formContents)
  // // debugger;

  var recipe = {}
  var nameNode = document.getElementById('recipeName');
  var descriptionNode = document.getElementById('recipeDescription');
  var ingredientNodes = document.getElementsByName('ingredients');
  recipe.name = nameNode.innerHTML;
  recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = [];
  for(var i = 0 ; i < ingredientNodes.length ; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML);
  }
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);

}



function handleSubmit() {
//   var name = document.getElementById('recipe-form').elements.namedItem("name").value
//   var description = document.getElementById('recipe-form').elements.namedItem("description").value
//   var ingredientList = Array.from(document.getElementsByName("ingredients")).map(function(ingredient) {
//     return ingredient.value
//   })
//   var filteredIngredientList = ingredientList.filter(Boolean)
// // debugger;
//   var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
//   var recipe = recipeTemplate({name: name, description: description, ingredients: filteredIngredientList})
//   // debugger;
//   document.getElementsByTagName('main')[0].innerHTML = recipe

  var recipe = {}
  var nameNode = document.getElementById('name');
  var descriptionNode = document.getElementById('description');
  var ingredientNodes = document.getElementsByName('ingredients');
  recipe.name = nameNode.value;
  recipe.description = descriptionNode.value;
  recipe.ingredients = [];
  for(var i = 0 ; i < ingredientNodes.length ; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  }
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = recipeTemplateFn(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
