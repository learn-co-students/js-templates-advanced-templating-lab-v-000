function init() {
  //put any page initialization/handlebars initialization here
   var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  // var result = template(recipes);
  // document.getElementsByTagName("main")[0].innerHTML += result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function handleSubmit() {
 
  }