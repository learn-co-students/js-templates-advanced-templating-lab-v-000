function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li>' + ingredient + '</li>')
  });

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);
}


function createRecipe() {
  var name = document.getElementById("name").value;
  var ingredientsNodes = document.getElementsByName("ingredients");
  var ingredients = []
  for(var i=0; i<ingredientsNodes.length; i++) {
    var result = ingredientsNodes[i].value;
    if(result !== ""){
      ingredients.push(result)
    }
  }
  var recipe = {name, ingredients};

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += template(recipe);
}

function displayEditForm() {
  
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
