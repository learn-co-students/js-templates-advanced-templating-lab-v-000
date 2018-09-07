## Instructions

[] Create a form template with an `id` of `recipe-form-template` that will be used to enter new recipes. Make the form submit with a `createRecipe()` function. Provide inputs for recipe `name`, `description`, and at least five `ingredients`. **Hint:** Get comfy collecting values with `getElementsByName()`.

[] Create a template with an `id` of `recipe-template`. This template should contain the recipe `name` and an "Edit Recipe" link, and render the `recipeDetailsPartial` in step 3. Render this template with the recipe data when the user submits the form.

[] Register a partial called `recipeDetailsPartial` for the `description` and `ingredients` of the recipe. Create a template with an `id` of `recipe-details-partial` to hold the markup. Use the `each` helper to display the collection of `ingredients`.

[] Use a custom helper called `displayIngredient` to display each ingredient within the `each` block.

[] On click of your "Edit Recipe" link, call a `displayEditForm()` function that renders a template called `recipe-form-template`. Allow your recipe to be edited using this form, and re-render the recipe template with the updated information using a `updateRecipe()` function on form submit.

[] Refactor your forms so that `recipe-form` and the edit form template are both constructed with the same `recipe-form-template`. The template should render with the recipe data for edit, and with empty values for a new recipe. **Hint:** Don't forget you can pass any object with any properties as the context for your templates, including, for instance, values for `onsubmit`.
