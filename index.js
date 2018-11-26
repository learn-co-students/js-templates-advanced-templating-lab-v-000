function init() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template();
  document.getElementById("main").innerHTML = result
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// function handleSubmit() {
//   var issue = {
//     name: ,
//     description: ,
//     ingredients: ,
//   }
 
//   var template = Handlebars.compile(document.getElementById("recipe-form").innerHTML);
//   var result = template(recipe);
//   document.getElementsByName("name", "description", "ingredients")[0].innerHTML += result;
// }
