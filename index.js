function init() {
  //put any page initialization/handlebars initialization here
  var recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}

var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
var html = template(recipe);
}

Handlebars.registerPartial('namePartial', document.getElementById("recipe-template").innerHTML)
function renderMain() {
  var template = Handlebars.compile(document.getElementById("main-template").innerHTML);
  var html = template({name: 'Gordon Ramsay'});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
