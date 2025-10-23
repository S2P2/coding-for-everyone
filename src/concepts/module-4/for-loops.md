# Stir Until Combined (For Loops)

In the last section, we created our recipe card—a list containing all the steps. Now, how do we follow the instructions? You wouldn't just read the first step; you'd read and perform *every* step, one after another, until the recipe is complete.

A **`for` loop** is how you tell the computer to do this. It automates repetition. Instead of writing code to print `recipe[0]`, then `recipe[1]`, then `recipe[2]`, you can create a simple loop to do it for you.

The logic is just like cooking: "**For** each `step` on my `recipe` card, I will **perform** that `step`."

The loop will automatically:

1. Start with the first `step`.
2. Perform the `action` specified for that step.
3. Move to the next `step`.
4. Repeat until all `steps` are complete.

Let's use a `for` loop to print every step in our recipe list from the last lesson.

<!-- langtabs-start -->

```py
recipe = [
  "Preheat oven to 400°F",
  "Mix all ingredients in a bowl",
  "Pour into baking dish",
  "Bake for 25 minutes"
]

# For each 'step' in the 'recipe' list...
# ...put it in a temporary variable called 'step' and run the code below.
for step in recipe:
  print(step)

# The output will be all four steps, printed one by one.
```

```js
let recipe = [
  "Preheat oven to 400°F",
  "Mix all ingredients in a bowl",
  "Pour into baking dish",
  "Bake for 25 minutes"
];

// For each 'step' in the 'recipe' array...
// ...put it in a temporary variable called 'step' and run the code below.
for (let step of recipe) {
  console.log(step);
}

// The output will be all four steps, printed one by one.
```

<!-- langtabs-end -->

The combination of lists (to store your `ingredients` and `steps`) and loops (to process them) is one of the most powerful pairings in all of programming. You'll use it constantly to work with collections of `ingredients`, `menu items`, `orders`, or any other data you can imagine.

---

## Beyond Printing: Using Loops to Calculate

The real power of loops comes from doing calculations. Imagine your recipe has multiple stages, each with a different duration. A loop can act as a calculator to find the total time.

Let's say we have a list of cooking times in minutes (e.g., for prepping, baking, and resting). We can loop through them to calculate the sum. To do this, we'll create a "running total" variable that starts at 0 and adds the time from each step.

<!-- langtabs-start -->

```py
# A list of durations for each stage of cooking
cooking_times = [15, 30, 10] # prep, bake, rest

# Start our running total at 0
total_time = 0

# For each number in our list...
for time in cooking_times:
  # ...add it to our running total
  total_time = total_time + time
  # After the first loop, total_time is 15
  # After the second loop, total_time is 15 + 30 = 45
  # After the third loop, total_time is 45 + 10 = 55

# After the loop is finished, print the final result
print("Total cooking time:", total_time, "minutes")
```

```js
// An array of durations for each stage of cooking
let cookingTimes = [15, 30, 10]; // prep, bake, rest

// Start our running total at 0
let totalTime = 0;

// For each number in our array...
for (let time of cookingTimes) {
  // ...add it to our running total
  totalTime = totalTime + time;
  // After the first loop, totalTime is 15
  // After the second loop, totalTime is 15 + 30 = 45
  // After the third loop, totalTime is 45 + 10 = 55
}

// After the loop is finished, log the final result
console.log("Total cooking time: " + totalTime + " minutes");
```

<!-- langtabs-end -->

That's it. We didn't just read the list; we used a loop to process it and produce a single, meaningful result. This technique of aggregating data is fundamental. You'll use it to sum up sales, count users, or calculate averages—all by combining a list and a `for` loop.
