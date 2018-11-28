function init() {
  //put any page initialization/handlebars initialization here
  let recipeForm = document.getElementById('recipe-form-template').innerHTML;
  let template = Handlebars.compile(recipeForm);
  document.getElementsByTagName('main')[0].innerHTML = template();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function handleSubmit(){
  
}



function displayEditForm(){

}
