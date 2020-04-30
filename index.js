function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  let formTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let main = document.querySelector('main')
  let array = [ "", "", "", "", "" ]
  
  main.innerHTML += formTemplateFn({"ingredients": array});

}

function handleSubmit() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredientsNode = document.getElementsByName('ingredients')
  let ingredients = Array.from(ingredientsNode).map(ing => ing.value)
  let recipeTemplateFn = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  let recipe = {
    "name": name,
    "description": description,
    "ingredients": ingredients
  }

  let html = recipeTemplateFn(recipe)
  
  main.innerHTML = html

}

function displayEditForm() {
  let name = document.getElementById('recipeName').innerHTML;
  let description = document.getElementById('recipeDescription').innerHTML;
  let ingredientsNode = document.getElementsByName('ingredients')
  let ingredients = Array.from(ingredientsNode).map(ing => ing.innerHTML)

  let formData = {
    "name": name,
    "description": description,
    "ingredients": ingredients
  }

  let formTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  let html = formTemplateFn(formData)
  
  main.innerHTML = html

}

// function displayEditForm() {
//   var recipe = {}
//   var nameNode = document.getElementById('recipeName');
//   var descriptionNode = document.getElementById('recipeDescription');
//   var ingredientNodes = document.getElementsByName('ingredients');
//   recipe.name = nameNode.innerHTML;
//   recipe.description = descriptionNode.innerHTML;
//   recipe.ingredients = [];
//   for(var i = 0 ; i < ingredientNodes.length ; i++) {
//     recipe.ingredients.push(ingredientNodes[i].innerHTML);
//   }
//   var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
//   var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
//   document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
// }

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
