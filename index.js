function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handlebarsSetup() {
	Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
	Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML)
	Handlebars.registerHelper("displayIngredient", function(ingredient) {
		return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>")
	})
}

function initForm() {
  let formTemplate= document.getElementById("recipe-form-template").innerHTML
  let template= Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML= template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
	let recipe = gatherRecipeInfo()
	let recipeTemplate = document.getElementById('recipe-template').innerHTML
	let compiled = Handlebars.compile(recipeTemplate)

	document.getElementsByTagName("main")[0].innerHTML += compiled(recipe)
}

function gatherRecipeInfo() {
	let name = document.getElementById('name').value
	let description = document.getElementById('description').value
	let ingredientNodes = document.getElementsByName('ingredients')

	let ingredients = []

	for(let i=0; i<ingredientNodes.length; i++) {
		if(ingredientNodes[i].value != "") {
			ingredients.push(ingredientNodes[i].value)
		}
	}

	let recipe = {name, description, ingredients}
	return recipe
}

function displayEditForm() {
	let name = document.getElementById("nameHeader").innerText
	let description = document.getElementById("recipeDescription").innerText
	let ingredientNodes = document.getElementsByName("ingredientsList")

 	let ingredients = []

	 for (let i = 0; i < ingredientNodes.length; i++) {
	   ingredients.push(ingredientNodes[i].innerText)
	 }

    let recipe = {name, description, ingredients, submitAction: "updateRecipe()"}
    let template = document.getElementById("recipe-form-template").innerHTML
    let compiled = Handlebars.compile(template)
    document.getElementById("main").innerHTML = compiled(recipe)
}

function updateRecipe() {
  let recipe = gatherRecipeInfo()
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let compiledTemplate = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = compiledTemplate(recipe)
}
