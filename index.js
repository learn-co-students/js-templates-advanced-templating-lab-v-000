const db = {
        'name': 'Place holder',
				'description': '',
        'ingredients': [{ingredient: ''}, {ingredient: ''}, {ingredient: ''}, {ingredient: ''}, {ingredient: ''}]
				};

function init() {
  //put any page initialization/handlebars initialization here
	Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

	Handlebars.registerHelper('displayIngredient', function() {	
		return new Handlebars.SafeString("<li name='ingredients'>" + ingredient  + "</li>");
	})

	renderRecipeForm(db);
}

function renderRecipeForm(db) {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFunction = Handlebars.compile(template);
  let html = templateFunction(db);
	document.getElementById("main").innerHTML += html;
	console.log(html);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
