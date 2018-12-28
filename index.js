
function init() {
	Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
	Handlebars.registerHelper('displayIngredient', function(ingredient) {
		return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
	})
  //put any page initialization/handlebars initialization here
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  
  document.getElementsByTagName("main")[0].innerHTML += formTemplate;


}

function handleSubmit() {
	
	let recipe = {
		name: document.getElementById('name').value,
		description: document.getElementById('description').value,
		ingredients: []
	}

	let list = document.getElementsByName('ingredients')
	for (let i = 0; i < list.length; i++) {
		if (list[i].value != '') {
			recipe.ingredients.push(list[i].value)
		}
	}

	let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

	let recipeTemplate = template(recipe);

	document.getElementsByTagName("main")[0].innerHTML += recipeTemplate;
}

function displayEditForm() {
	let recipe = {
		name: document.getElementById('recipeName').innerHTML,
		description: document.getElementById('recipeDescription').innerHTML,
		ingredients: []
	}
	
	let list = document.getElementsByName('ingredients')
	for (let i = 0; i < list.length; i++) {
		if (list[i].value != "")
			recipe.ingredients.push(list[i].innerHTML)
	}

	let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  
  document.getElementsByTagName("main")[0].innerHTML = formTemplate(recipe);

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
