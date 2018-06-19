function init() {
    //put any page initialization/handlebars initialization here
    //Display form for recipes at the top of the page.
    Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
    const template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
    document.getElementById('main').innerHTML += template();

    //Register partials to display the created recipes
    Handlebars.registerHelper('displayIngredient', function() {
        return new Handlebars.SafeString('<li class="rIngredients">' + this.name + '</li>');
    })
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

}
document.addEventListener('DOMContentLoaded', function(event) {
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
        ],
        submitContext: 'hello' //'createRecipe()'
    }
    console.log(recipe)
    const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    const html = template(recipe)
    document.getElementById('main').innerHTML += html;
    return false;
}

function displayEditForm() {
    const recipe = {
        name: document.getElementById('rName').innerHTML,
        description: document.getElementById('rDescription').innerHTML,
        ingredients: [
            { name: document.getElementsByClassName("rIngredients")[0].innerHTML },
            { name: document.getElementsByClassName("rIngredients")[1].innerHTML },
            { name: document.getElementsByClassName("rIngredients")[2].innerHTML },
            { name: document.getElementsByClassName("rIngredients")[3].innerHTML },
            { name: document.getElementsByClassName("rIngredients")[4].innerHTML }
        ],
        submitContext: 'updateRecipe()'
    }
    const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    const html = template(recipe)
    console.log(html)
    document.getElementById("main").innerHTML = html
        //return false;
}

function updateRecipe() {
    return false

}