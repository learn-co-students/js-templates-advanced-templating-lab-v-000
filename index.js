function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate=document.getElementById("recipe-form-template").innerHTML;
  var formTemplateFx = Handlebars.compile(formTemplate);
  document.getElementById("main").innerHTML=formTemplateFx({ingredients: ["","","","",""]})
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper("displayIngredient", function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient +'</li>');
  })
}

function handleSubmit() {
  let recipe={};
  let nameNode=document.getElementById("name");
  let descriptionNode=document.getElementById("description");
  let ingredientNodes=document.getElementsByName("ingredients");
  recipe.name=nameNode.value;
  recipe.description=descriptionNode.value;
  recipe.ingredients=[];
  for (let i=0; i<ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].value);
  }
  let recipeTemplate=document.getElementById("recipe-template").innerHTML;
  let recipeTemplateFx=Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML=recipeTemplateFx(recipe);
}

function displayEditForm() {
  let recipe={};
  let nameNode=document.getElementById("recipeName");
  let descriptionNode=document.getElementById("recipeDescription");
  let ingredientNodes=document.getElementsByName("ingredients");
  recipe.name=nameNode.innerHTML;
  recipe.description=descriptionNode.innerHTML;
  recipe.ingredients=[];
  for (let i=0; i<ingredientNodes.length; i++) {
    recipe.ingredients.push(ingredientNodes[i].innerHTML);
  }
  let recipeFormTemplate=document.getElementById("recipe-form-template").innerHTML;
  let recipeFormTemplateFx=Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML=recipeFormTemplateFx(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
