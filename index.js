function init() {
  //put any page initialization/handlebars initialization here
  var text = document.getElementById("recipe-form-template").innerHTML
  var formTemplate = Handlebars.compile(text)
  document.getElementById('main').innerHTML = formTemplate({ingredients: ['','','','','']});

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

Handlebars.registerHelper('displayIngredient', function(ingredient) { return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')})


}



function handleSubmit(){
  var recipe = {};
  var nameNode = document.getElementById("name")
  var descriptionNode = document.getElementById("description")
  var ingredientsNode = document.getElementsByName("ingredients")
recipe.name = nameNode.value;
recipe.description = descriptionNode.value;
recipe.ingredients = []
for(var i = 0 ; i < ingredientsNode.length ; i++) {
    recipe.ingredients.push(ingredientsNode[i].value);
  }

  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var templateFn = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = templateFn(recipe);

}

function displayEditForm(){
  var recipe = {};
  var nameNode = document.getElementById("recipeName")
  var descriptionNode = document.getElementById("recipeDescription")
  var ingredientsNode = document.getElementsByName("ingredients")

  recipe.name = nameNode.innerHTML;
   recipe.description = descriptionNode.innerHTML;
  recipe.ingredients = []
  for(var i = 0 ; i < ingredientsNode.length ; i++) {
      recipe.ingredients.push(ingredientsNode[i].innerHTML);
    }

    var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
    var templateFn = Handlebars.compile(recipeFormTemplate)
    document.getElementById("main").innerHTML = templateFn(recipe);

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
