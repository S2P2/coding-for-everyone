# The Pantry (Arrays & Lists)

In a real kitchen, you don't handle each ingredient individually; you gather them, organize them, and work with them in groups, much like items in your pantry. Similarly, in programming, when you have many related pieces of information, such as a list of ingredients or a sequence of recipe steps, creating a separate variable for each one—like `ingredient1`, `ingredient2`, `step1`, `step2`—would quickly become unmanageable.

There's a much better way: a **list** (or **array**, the name varies by language, but the concept is the same). It's a single variable that acts as a container for multiple items in an ordered sequence.

Think of it as a **recipe card**. The card itself is the list, and each line of instruction is an item on that list.

The most important thing to know is that these lists are **zero-indexed**. This means the first item is at position `0`, the second is at position `1`, and so on.

```admonish note title="Why zero-indexed?" collapsible=true
While it might seem counter-intuitive at first, computers typically begin counting from zero.

This approach is fundamental to how memory is accessed efficiently. By treating the first item's position as 'offset 0', computers can quickly calculate the memory location of any other item in a list through a direct mathematical operation.

This efficiency has made zero-based indexing a ubiquitous standard in programming languages.
```

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

```admonish info title="What happens if you try to access an item that doesn't exist?" collapsible=true
If you try to access an item using an index that is outside the valid range of the list (for example, index `4` in a list that only has four items with indices `0` to `3`), you'll encounter a common error known as an "index out of range" or "index out of bounds" error.

This happens because you're asking for an item at a position that doesn't exist in the list. It's like trying to find a page in a book that isn't there. The program doesn't know what to do, so it stops and reports this error to let you know that something has gone wrong with how you're trying to access the list's contents.
```

By using a list, we can keep all our related data organized in a single, ordered container. Now, how do we work with every item on this list without calling them one by one? That's where loops come in.
