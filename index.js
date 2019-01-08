function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingred) {
  	var result = '<li name="ingredients">'
	return new Handlebars.SafeString(result + ingred + "</li>")
  })

  var recipe = {
	name: "",
	description: "",
	ingredients : ["","","","",""]
	}

  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let html = templateFn(recipe);
  document.getElementsByTagName("main")[0].innerHTML = html;

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})



function handleSubmit () {
	var ing = [];
	var i;
	for (i = 0; i < document.getElementsByName("ingredients").length; i++) {
		ing.push(document.getElementsByName("ingredients")[i].value)
	}

	var recipe = {
		name: document.getElementById("name").value,
		description: document.getElementById("description").value,
		ingredients : ing
	}

    let template = document.getElementById("recipe-template").innerHTML;
	let templateFn = Handlebars.compile(template);
	let html = templateFn(recipe);
	document.getElementsByTagName("main")[0].innerHTML = html;

}


function displayEditForm() {
	var ing = [];
	var i;
	for (i = 0; i < document.getElementsByName("ingredients").length; i++) {
		ing.push(document.getElementsByName("ingredients")[i].innerHTML)
	}

	var recipe = {
		name: document.getElementById("recipeName").innerHTML,
		description: document.getElementById("recipeDescription").innerHTML,
		ingredients : ing
	}

	debugger;

	let template = document.getElementById("recipe-form-template").innerHTML;
	let templateFn = Handlebars.compile(template);
	let html = templateFn(recipe);
	document.getElementsByTagName("main")[0].innerHTML = html;

	debugger;

}

