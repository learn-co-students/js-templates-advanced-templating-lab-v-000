function init() {
  Handlebars.registerHelper('displayIngredient', function(){
    const safeName = Handlebars.escapeExpression(this.value);

    return new Handlebars.SafeString("<li>" + safeName + "</li>");
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
