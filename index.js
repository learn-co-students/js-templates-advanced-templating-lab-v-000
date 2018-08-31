function displayEditForm() {

}

function createRecipe(){

}

function updateRecipe(){

}

function init() {

// var pageDiv = document.getElementById("page");
// var pageTemplate = document.getElementById("page-template").innerHTML;
// var pageTemplateFn = _.template(pageTemplate);
// var pageTemplateHTML = pageTemplateFn();
// pageDiv.innerHTML = pageTemplateHTML;

  //var recipesDiv = document.getElementById("recipes");
  var recipesTemplate = document.getElementById("recipe-form-template").innerHTML;
  var recipesTemplateFn = Handlebars.compile(recipesTemplate);
  var recipesTemplateHtml = recipesTemplateFn();
  //recipesDiv.innerHTML = recipesTemplateHtml;
  //could replace the below line with the above line
  document.getElementsByTagName("main")[0].innerHTML = recipesTemplateHtml;

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
