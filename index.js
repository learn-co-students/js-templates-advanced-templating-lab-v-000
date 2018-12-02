//Handlebars.registerPartial('recipeDetailsPartial', );

Handlebars.registerHelper('displayIngredient', function(ingr) {
  //debugger
  let ingredient = ingr;
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

    //let templatep = document.getElementById("recipe-template").innerHTML;
    // let templatep = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    // let htmlp = templatep({});
    // document.getElementsByTagName("main")[0].innerHTML += htmlp;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
