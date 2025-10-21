# The Pantry (Arrays & Lists)

Imagine you want to write down the steps for a recipe. You could create a separate variable for each step: `step1`, `step2`, `step3`, and so on. That would get messy very quickly.

There's a much better way: a **list** (or **array**, the name varies by language, but the concept is the same). It's a single variable that acts as a container for multiple items in an ordered sequence.

Think of it as a **recipe card**. The card itself is the list, and each line of instruction is an item on that list.

The most important thing to know is that these lists are **zero-indexed**. This means the first item is at position `0`, the second is at position `1`, and so on. It's a little strange at first, but it's a fundamental concept in programming.

Let's create a list of recipe steps.

<!-- langtabs-start -->

```py
# A list of strings, held in a single variable called 'recipe'.
recipe = [
  "Preheat oven to 400°F",
  "Mix all ingredients in a bowl",
  "Pour into baking dish",
  "Bake for 25 minutes"
]

# Access the FIRST item at index 0
first_step = recipe[0]

print(first_step) # Displays "Preheat oven to 400°F"

# Access the THIRD item at index 2
third_step = recipe[2]

print(third_step) # Displays "Pour into baking dish"
```

```js
// An array of strings, held in a single variable called 'recipe'.
let recipe = [
  "Preheat oven to 400°F",
  "Mix all ingredients in a bowl",
  "Pour into baking dish",
  "Bake for 25 minutes"
];

// Access the FIRST item at index 0
let firstStep = recipe[0];

console.log(firstStep); // Displays "Preheat oven to 400°F"

// Access the THIRD item at index 2
let thirdStep = recipe[2];

console.log(thirdStep); // Displays "Pour into baking dish"
```

<!-- langtabs-end -->



By using a list, we can keep all our related data organized in a single, ordered container. Now, how do we work with every item on this list without calling them one by one? That's where loops come in.
