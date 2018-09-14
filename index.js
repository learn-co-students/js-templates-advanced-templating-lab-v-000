function createForm(){
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += template({'onSubmit': 'createRecipe()'});
}

function createRecipe(){
  const name = document.getElementById("name").value
  const description = document.getElementById("description").value
  const ingredientsNodes = document.getElementsByName("ingredients")
  let ingredientsList = []
  for (let i = 0; i < ingredientsNodes.length; i++) {
    ingredientsList.push(ingredientsNodes[i])
  }
  const recipe = {"name": name, "description": description, "ingredients": ingredientsList}

  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += template(recipe)
}

// function displayEditForm(){
// }
//
// function updateRecipe(){}
//
function handlebarsRegistration(){
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)

//   Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML)
//
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>")
    })
  }


function init() {
  //put any page initialization/handlebars initialization here
  // handlebarsRegistration()
  createForm()
  handlebarsRegistration()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


// Handlebars.registerHelper('displayIngredient')
