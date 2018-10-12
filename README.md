# JavaScript Handlebars Templates Lab

## Objectives

1. Practice using Handlebars templates
2. Practice defining Handlebars helpers
3. Practice using Handlebars partials

## Introduction

In this lab we're going to build a simple recipe application using Handlebars templates. Follow the instructions below, and don't forget to run test and try out your app to make sure everything works!

You'll be using templates, creating custom helpers, and using partials. Help can be found at the [Handlebars](http://handlebarsjs.com) website, and we'll briefly review the basics below.

## Handlebars Templates and Helpers

We can construct templates within script tags using the `{{}}` delimiters to mark data values, like this:

```html
<script id="my-template" type="text/x-handlebars-template">
  <div id="recipe">
    <p>{{description}}</p>
    <ul>
      {{#each ingredients}}
      <li>{{name}}</li>
      {{/each}}
    </ul>
  </div>
</script>
```

Keep in mind that the placeholder values within the double curly braces must match the names of attributes on the object that you pass as context to the template.

We can also use the `each` helper on a collection, in this case the `ingredients` property of the current recipe, to render a part of a template multiple times.

To render this template, our JavaScript code would look like this:

```js
var recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}

var template = document.getElementById("my-template").innerHTML;
var templateFn = Handlebars.compile(template);
var html = templateFn(recipe);
```

First we grab the `innerHTML` of our template. Next, we use `Handlebars.compile` to create the `templateFn` function using the `innerHTML` of our template. Finally, we execute the `templateFn` function with a context object, `recipe`, to get rendered HTML.

## Handlebars Partials

Handlebars also has the concept of a _partial_, or a bit of template that you can use to compose larger templates. Partials are useful when you have a chunk of markup that you want to reuse in more than one place.

A [Handlebars partial](http://handlebarsjs.com/partials.html) is just a template that you can render inside of another template using the `{{> partialName }}` partial call syntax after registering it with `Handlebars.registerPartial`.

Let's look at a quick example.

```html
<script id="main-template" type="text/x-handlebars-template">
  {{> namePartial }}
</script>
<script id="partial-template" type="text/x-handlebars-template">
  <div>{{ name }}</div>
</script>
```

```js
Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML)
function renderMain() {
  var template = document.getElementById("main-template").innerHTML;
  var templateFunction = Handlebars.compile(template);
  var html = templateFunction({name: 'Gordon Ramsay'});
}
```

By default, the partial will receive the same context object as the template that calls it, so our partial has the same access to `name` as the main template does.

## Sneak Peek

You'll be building out 3 screens: New Recipe, Show Recipe, Edit Recipe. When you're done, a user should be able to:
1. Visit the page and see a form to create a new recipe, fill it out and submit it (New Recipe)
2. See the recipe details and a link to edit the recipe (Show Recipe)
3. Click the link to Edit the recipe and see the form rendered with pre-filled values (Edit Recipe)
3. Update the values in the edit form and submit it to change the recipe (Edit Recipe)
4. View the updated recipe details (Show Recipe)

For simplicity's sake, only render one of these screens at a time. If we wanted to send AJAX requests to different endpoints depending on whether we were editing or creating a new recipe, we could pass a submitFunction as part of our context for the templateFunction and pass a different function for each screen. But, since we don't have a back end here, we can use the same form template and the same function to handle the submission. 

## Instructions

**Note:** The provided `index.js` includes a function called `init` that will be called when the page loads. Put any Handlebars registration code (think helpers & partials) and page initialization code you need inside this function or your tests will not function correctly.  If you're running this lab using node 10+, you may not see test errors. Any node version from 6 through 9 should show you errors when you first run the tests.

1. Create a form template with an `id` of `recipe-form-template` that will be used to enter new recipes. Configure handlebars to display this template within the `main` tag (You'll need to do this within the `init()` function for the tests to work properly). After doing this, your second test will be passing and you'll get meaningful errors on your first. Give the form an id of `recipe-form` and have it submit with a `handleSubmit()` function. Provide inputs for recipe `name`, `description`, and at least five `ingredients`. **Hint:** Get comfy collecting values with `getElementsByName()`. Also, make sure you give your name and description inputs a matching id (`#name` & `#description`). [Handlebars Iteration](http://handlebarsjs.com/builtin_helpers.html#iteration) also might be useful here.
2. Create a template with an `id` of `recipe-template`. This template should contain the recipe `name` inside of a header tag with an id of `name` and an "Edit Recipe" link that calls the `displayEditForm()` function on click. This template will then render the `recipeDetailsPartial` you will build in the following step. Later, you'll render this template with the recipe data when the user submits the form.
3. Register a partial called `recipeDetailsPartial` for the `description` and `ingredients` of the recipe. Create a template with an `id` of `recipe-details-partial` to hold the markup. Make sure the description is rendered inside of a container with an id of `description`. Use the [`each` helper]((http://handlebarsjs.com/builtin_helpers.html#iteration)) to display the collection of `ingredients`. Within the loop, you'll want to invoke the `displayIngredient` helper you'll define in the next step. **Hint** Think about where partials should be registered. For these tests, you can invoke the [helper](http://handlebarsjs.com/#helpers) before defining it.  
4. Define a custom helper called `displayIngredient` to display each ingredient within the `each` block. Each ingredient should be inside of an `li` with a name attribute equal to `ingredients`. **Hint** Check out the docs on [HTML escaping in Handlebars](http://handlebarsjs.com/#html-escaping). Also, think about where helpers should be registered.
5. Build out the `handleSubmit()` function so that submitting the initial new recipe form will use the `recipe-template` to display the recipe, all of its details, and the "Edit Recipe" link. **Hint** Don't forget that submitting a form will trigger a page refresh. In order to display the recipe, we'll need to hook into that [form submit](https://javascript.info/forms-submit) event.
6. On click of your "Edit Recipe" link, call a `displayEditForm()` function that renders a template called `recipe-form-template`. Allow your recipe to be edited using this form, and re-render the recipe template with the updated information. **Hint** How can you pre-fill the edit form with the correct values? Think about what information you have access to when a user clicks on the "Edit Recipe" link.



# Resources

- [Handlebars](http://handlebarsjs.com)
- [Handlebars partials](http://handlebarsjs.com/partials.html)
- [Handlebars iteration](http://handlebarsjs.com/builtin_helpers.html#iteration)
- [HTML escaping in Handlebars](http://handlebarsjs.com/#html-escaping)
- [JS Form Submit events](https://javascript.info/forms-submit)