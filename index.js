function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient){
  	return new Handlebars.SafeString('<li name="listOfIngredients">' + ingredient + '</li>')
  })
  const recipeForm = document.getElementById('recipe-form-template').innerHTML
  const recipeFormHandlebars = Handlebars.compile(recipeForm)
  document.getElementsByTagName('main')[0].innerHTML = recipeFormHandlebars({action: "createRecipe()", recipe: {name: "", description: "", ingredients: []}})

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
	const recipe = retrieveFormValues()
	const recipeTemplate = document.getElementById("recipe-template").innerHTML
	const template = Handlebars.compile(recipeTemplate)
	document.getElementsByTagName('main')[0].innerHTML += template(recipe)
}

function retrieveFormValues(){
	const name = document.getElementById('name').value
	const description = document.getElementById('description').value
	const ingredientNodes = document.getElementsByName('ingredients')
	let ingredients = []
	for (let i = 0; i < ingredientNodes.length; i++) {
		if (ingredientNodes[i].value !== ""){
		ingredients.push(ingredientNodes[i].value)
		}
	}
	return {
		name: name,
		description: description,
		ingredients: ingredients
	}
}

function displayEditForm(){
	const name = document.getElementById('recipe-name').innerText
	const description = document.getElementById('recipe-description').innerText
	const ingredientNodes = document.getElementsByName('listOfIngredients')
	let ingredients = []
	for (let i = 0; i < ingredientNodes.length; i++) {
		if (ingredientNodes[i].value !== ""){
		ingredients.push(ingredientNodes[i].innerText)
		}
	}
	let recipe = {action: "updateRecipe()", name, description, ingredients}
	const recipeForm = document.getElementById('recipe-form-template').innerHTML
	const recipeFormHandlebars = Handlebars.compile(recipeForm)
	document.getElementsByTagName('main')[0].innerHTML = recipeFormHandlebars(recipe)
}

function updateRecipe(){
	const recipe = retrieveFormValues()
	const recipeTemplate = document.getElementById("recipe-template").innerHTML
	const template = Handlebars.compile(recipeTemplate)
	document.getElementsByTagName('main')[0].innerHTML = template(recipe)
}