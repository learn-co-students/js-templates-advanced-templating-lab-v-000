function init() {
  //put any page initialization/handlebars initialization here
function handleSubmit(){
  var template = Handlebars.compile(document.getElementById("recipe-form").innerHTML)
  var result = template()
document.getElementsByTagName("main")[0].innerHTML += result

}

Handlebars.registerPartial("RecipeDetailsPartial",document.getElementById("recipe-details-partial").innerHTML)

function displayEditForm(){

}

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
