function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper("displayIngredient", function() {
    return new Handlebars.SafeString("<li>" + this.name + "</li>");
  });
}


function createRecipe() {

  const name = document.getElementById("name").value;
  const ingredients = [];
  const ingredientsHTML = document.getElementsByName("ingredients");

  for (i = 0; i < ingredientsHTML.length; i++) {
    ingredients.push(ingredientsHTML[i].value);
  };
};

// Handlebars.registerPartial('recipe-details-partial', document.getElementbyId("recipe"))
