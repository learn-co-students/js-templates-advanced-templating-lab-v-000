function handlebarsSetUp() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li >" + this.name + ": " + this.quantity + "</li>")
  })
//might need a way to select name and quantity information
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('manyIngredients', function() {
   let accum = '';
    for(let i = 0; i <= 5; i++) {
      let template = Handlebars.compile(Handlebars.partials.ingredientsFormPartial)
      accum += template()
    }
    return accum //accum is a string
  })

}

function createRecipe() {
  let recipe = {"name": document.getElementById("name").value, "description": document.getElementById("description").value}
    let ingredientInput = Array.from(document.getElementsByName("ingredients"))
    let ingredients = []
    ingredientInput.forEach(function(element) {
      ingredients.push(Object.assign({}, {["name"]: element.querySelector(".name").value}, {["quantity"]: element.querySelector(".quantity").value}))
    })
  recipe["ingredients"] = ingredients
  const recipePartial = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML += recipePartial(recipe)
}

function displayEditForm() {
  let recipe ={
    "name": document.getElementById("recipe-name").innerHTML,
    "description": document.getElementById("recipe-description").innerHTML}
  let ingredientCollection = Array.from(document.getElementsByTagName("li"))
  let ingredients = []
  ingredientCollection.forEach(function(element) {
    ingredients.push(Object.assign({}, {["name"]: element.innerHTML.split(": ")[0]}, {["quantity"]: element.innerHTML.split(": ")[1]}))
  })
  recipe["ingredients"] = ingredients
  const recipeForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML += recipeForm(recipe)
}

function updateRecipe() {
  //reconstit
  const recipePartial = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML += recipePartial(recipe)
}








function initForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML += template()
}

function init() {
  handlebarsSetUp()
  initForm()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
