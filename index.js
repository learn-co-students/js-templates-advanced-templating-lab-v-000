function init() {
  //put any page initialization/handlebars initialization here
  if (!document.getElementById("recipeName")) {
    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    var result = template();
    debugger;
    document.getElementsByTagName("main")[0].innerHTML += result;
  }

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function () {
    debugger;
    if (!document.getElementById("recipeName")) {
        return new Handlebars.SafeString(this.value);
    } else {
      return new Handlebars.SafeString(this.innerHTML);
    }
  })

}


function displayEditForm() {
  const recipe = {
    name: document.getElementById("recipeName").innerHTML,
    description: document.getElementById("recipeDescription").innerHTML,
    ingredients: document.getElementsByName("recipeIngredients")
  }
  debugger;
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function createRecipe() {
  const recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: document.getElementsByName("ingredients")
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  const recipe = {
    name: document.getElementById("name").innerHTML,
    description: document.getElementById("description").innerHTML,
    ingredients: document.getElementsByName("ingredients")
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
