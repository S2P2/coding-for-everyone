# Passing Ingredients (Function Parameters)

Our last function, `prepare_station()`, is useful, but it's like a recipe that never changes. It does the exact same thing every single time. What if we want our function to be more flexible? What if we want to welcome a specific person by name?

This is where **parameters** come in. Parameters are placeholders in a function's definition that allow you to pass data *into* the function when you call it.

Think of it like making a recipe flexible:

* A **parameter** is a placeholder ingredient on the recipe card, like (type\_of\_flour).
* An **argument** is the actual ingredient you use when you cook, like "whole wheat".

Let's update our greeting function to accept a name.

<!-- langtabs-start -->
```py
# 'ingredient' is a PARAMETER - a placeholder for the data we will pass in.
def add_ingredient(ingredient):
  print("Adding", ingredient, "to the bowl.")

# Now when we call the function, we must provide an ARGUMENT.
# "flour" is the argument that will fill the 'ingredient' placeholder.
add_ingredient("flour")

print("---")

# We can call it again with a different argument for a different result.
add_ingredient("sugar")
```

```js
// 'ingredient' is a PARAMETER - a placeholder for the data we will pass in.
function addIngredient(ingredient) {
  console.log("Adding " + ingredient + " to the bowl.");
}

// Now when we call the function, we must provide an ARGUMENT.
// "flour" is the argument that will fill the 'ingredient' placeholder.
addIngredient("flour");

console.log("---");

// We can call it again with a different argument for a different result.
addIngredient("sugar");
```

<!-- langtabs-end -->

You can have multiple parameters. Let's make a flexible `bake` function that can handle different foods and temperatures.

<!-- langtabs-start -->

```py
# This function takes two parameters.
def bake(food_item, temperature):
  print("Baking", food_item, "at", temperature, "degrees.")

# We must provide two arguments, in the correct order.
bake("bread", 375)
bake("cookies", 350)
bake("pizza", 425)
```

```js
// This function takes two parameters.
function bake(foodItem, temperature) {
  console.log("Baking " + foodItem + " at " + temperature + " degrees.");
}

// We must provide two arguments, in the correct order.
bake("bread", 375);
bake("cookies", 350);
bake("pizza", 425);
```

<!-- langtabs-end -->

By using parameters, your functions transform from simple, repeatable scripts into powerful, reusable tools that can adapt to different situations. This is the key to writing efficient and intelligent code.
