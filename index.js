function init() {
    //put any page initialization/handlebars initialization here
    const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    document.getElementById("recipe-form").innerHTML += template();
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
    Handlebars.registerHelper('displayIngredient', function() {
        return new Handlebars.SafeString("<li>" + this.name + "</li>");
    })

}
document.addEventListener("DOMContentLoaded", function(event) {
    init()
})

function createRecipe() {

    const recipe = {
        name: document.getElementsByName("name")[0].value,
        description: document.getElementsByName('description')[0].value,
        ingredients: [
            { name: document.getElementsByName("ingredients")[0].value },
            { name: document.getElementsByName("ingredients")[1].value },
            { name: document.getElementsByName("ingredients")[2].value },
            { name: document.getElementsByName("ingredients")[3].value },
            { name: document.getElementsByName("ingredients")[4].value }

        ]
    }
    console.log(recipe)
    const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    const html = template(recipe)
    document.getElementById("recipes").innerHTML += html;

    return false;

}