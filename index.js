

function init() {
  //put any page initialization/handlebars initialization here
  
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li>" + this.name + "</li>")
  })
  
  var recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  
  var html = template();
  
  document.getElementById("main").innerHTML += html;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  
  var recipe = {};
  recipe.name = document.getElementsByName("name")[0].value;
  recipe.description = document.getElementsByName("description")[0].value;
  recipe.ingredients = []
  var ings = document.getElementsByName("ingredients");
  for (var i = 0; i < ings.length; i++) {
    if (ings[i].value != "") {
      recipe.ingredients.push({name:ings[i].value})
    }
  }
  
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);

  //console.log(html);

  document.getElementById("main").innerHTML = html;
}

function displayEditForm() {
  var rname = document.querySelector("#recipe h1").innerHTML
  var description = document.querySelector("#recipe p").innerHTML
  var ingredients = document.querySelectorAll("#recipe li")
  var recipeForm = document.getElementById("recipe-form")
  //console.log(document.recipemaker);
  document.recipemaker.name.value = rname;
  document.recipemaker.description.value = description;
  for (var i=0; i < ingredients.length; i++) {
    document.recipemaker.ingredients[i].value = ingredients[i].innerHTML
  }
  //console.log(ingredients)
}

function updateRecipe() {
  createRecipe();
}

