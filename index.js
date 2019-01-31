function init() {
  //put any page initialization/handlebars initialization here

Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
 
initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()

  // function handleSubmit = _.template(document.getElementById)
})

function initForm(){
   let formTemplate = document.getElementById("recipe-form-template").innerHTML
   let template = Handlebars.compile(formTemplate)
   document.getElementsByTagName("main")[0].innerHTML = template();

   }
