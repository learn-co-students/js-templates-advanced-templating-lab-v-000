Handlebars.registerHelper('displayIngredient', function(ingr) {
  //debugger
  let ingredient = ingr;

  //debugger
  //  if(ingredient != "") {
  //   return Handlebars.SafeString("<li name=" + "ingredients>" + ingredient + "</li>");
  // }
  if(ingredient != "") {
   return new Handlebars.SafeString(
    "<li name=\"ingredients\"" + ">" + ingredient + "</li>"
  );
 }
});


function init() {
  //put any page initialization/handlebars initialization here


    let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    let html = template({});
    document.getElementsByTagName("main")[0].innerHTML += html;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
