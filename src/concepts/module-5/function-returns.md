# Returning the Dish (Function Returns)

So far, our functions have acted like recipes that you follow to perform an action, like printing a greeting to the screen. But what if you need a recipe that _produces_ something you can use later?

For example, you don't just "make a sauce"; you make a sauce that you can then add to a pizza. The sauce is the **result** of the recipe.

In programming, this is called a **return value**. A function can perform a calculation or a task and then "hand back" the result to the part of the code that called it. This is incredibly powerful because it allows you to build programs from small, productive building blocks.

The `return` keyword is used to send a value back.

Let's create a function that assembles a sushi roll. It will take an ingredient and a quantity, and it will return a string representing the finished roll.

<!-- langtabs-start -->

```python
# This function takes an ingredient and a number,
# then returns a new string.
def make_roll(ingredient, quantity):
  # In Python, you can multiply a string to repeat it.
  sushi = ingredient * quantity
  return sushi

# 1. Call the function and store its result in a variable.
#    The function returns "🍣🍣🍣", which gets saved in 'tuna_roll'.
tuna_roll = make_roll("🍣", 3)

# 2. Call it again to make a different roll.
#    This time, it returns "🥒🥒🥒🥒🥒", saved in 'cucumber_roll'.
cucumber_roll = make_roll("🥒", 5)

# 3. Now we can use our returned values!
print("Here is your tuna roll:", tuna_roll)
print("And your cucumber roll:", cucumber_roll)

# The real power: we can combine the results from our function.
# Let's make a platter!
sushi_platter = tuna_roll + " " + cucumber_roll
print("Enjoy your beautiful platter:", sushi_platter)
```

```javascript
// This function takes an ingredient and a number,
// then returns a new string.
function makeRoll(ingredient, quantity) {
  // In JavaScript, you can multiply a string by using .repeat() method.
  let sushi = ingredient.repeat(quantity);
  return sushi;
}

// 1. Call the function and store its result in a variable.
//    The function returns "🍣🍣🍣", which gets saved in 'tunaRoll'.
let tunaRoll = makeRoll("🍣", 3);

// 2. Call it again to make a different roll.
//    This time, it returns "🥒🥒🥒🥒🥒", saved in 'cucumberRoll'.
let cucumberRoll = makeRoll("🥒", 5);

// 3. Now we can use our returned values!
console.log("Here is your tuna roll: " + tunaRoll);
console.log("And your cucumber roll: " + cucumberRoll);

// The real power: we can combine the results from our function.
// Let's make a platter!
let sushiPlatter = tunaRoll + " " + cucumberRoll;
console.log("Enjoy your beautiful platter: " + sushiPlatter);
```

<!-- langtabs-end -->

Notice the key difference: a function with `print` just displays something on the screen. A function with `return` gives you a value back that you can store in a variable and use to make further decisions or calculations. This is the primary way that different parts of a program communicate with each other.
