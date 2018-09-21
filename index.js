function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-template').innerHTML);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {

    let recipeDescription = document.getElementById('description').value;

    let recipeName = document.getElementById('name').value;

    let recipeDetails = recipeValues();

    const recipe = {
        name: name,
        description: recipeDescription,
        ingredients: recipeDetails
    }

    debugger;
    let recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

    let result = recipeTemplate(recipe);

     document.getElementsByTagName("main")[0].innerHTML += result;


}

function recipeValues() {
    let ingredientsNodes = document.getElementsByName('ingredients');

    let ingredients = []
    for(let i = 0; i < ingredientsNodes.length; i++){
        if(ingredientsNodes[i].value !== ""){
            ingredients.push(ingredientsNodes[i].value);
        }

    }

    return ingredients;
}


function displayEditForm() {

}
