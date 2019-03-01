let db = {
        'name': 'Place holder',
				'description': '',
        'ingredients': [{'ingredient': ''}, {'ingredient': ''}, {'ingredient': ''}, {'ingredient': ''}, {'ingredient': ''}]
				};

function init() {
  //put any page initialization/handlebars initialization here
	Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

	Handlebars.registerHelper('displayIngredient', function() {	
		return new Handlebars.SafeString("<li name='ingredients'>" + this.ingredient  + "</li>");
	})

	renderRecipeForm(db);
}

function renderRecipeForm(db) {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFunction = Handlebars.compile(template);
  let html = templateFunction(db);
	document.getElementById("main").innerHTML += html;

	document.getElementById("recipe-form").onsubmit = function() {
		return handleSubmit();
	};
}

function handleSubmit() {

	let form = document.getElementById("recipe-form");
	db['name'] = document.getElementById("name").value;
	db['description'] = document.getElementById("description").value;
	
	const ingredients = document.getElementById("ingredients");
	const iList = ingredients.getElementsByClassName("ingredient");

	const ingredientArray = [];
	for (let i = 0; i < iList.length; i++) {
		ingredientArray.push({ingredient: iList[i].value});
  }

	db['ingredients'] = ingredientArray;	

  let template = document.getElementById("recipe-template").innerHTML;
	let templateFunction = Handlebars.compile(template);
  let html = templateFunction(db);
	document.getElementById("main").innerHTML = html;

	return false;
}

function displayEditForm() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFunction = Handlebars.compile(template);
  //debugger;
	let html = templateFunction(db);
	document.getElementById("main").innerHTML = html;

	document.getElementById("recipe-form").onsubmit = function() {
		return handleSubmit();
	};

	return false;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
