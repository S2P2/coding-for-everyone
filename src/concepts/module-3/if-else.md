# Taste and Adjust (If/Else Decisions)

Once your program can ask a question with a comparison operator, you need a way to act on the `true` or `false` answer. That's what `if/else` statements are for. They are the fundamental decision-making tool in programming.

The structure is just like a sentence you'd use in real life:

"**If** *the oven temperature is too high*, then turn it down. **Else**, keep it as is."

It’s like a fork in the road for your code, guiding it to the right action. The condition you check must evaluate to either `true` or `false`.

* The code inside the **`if`** block only runs when the condition is `true`.
* The code inside the **`else`** block only runs when the condition is `false`.

Let's build on the example from the last section. Instead of just printing `true` or `false`, we can print a more helpful message.

<!-- langtabs-start -->

```py
internal_temp = 170

if internal_temp >= 165:
  print("The dish is perfectly cooked! Ready to serve.")
else:
  print("The dish needs more time to cook. Keep cooking!")
```

```js
let internalTemp = 170;

if (internalTemp >= 165) {
  console.log("The dish is perfectly cooked! Ready to serve.");
} else {
  console.log("The dish needs more time to cook. Keep cooking!");
}
```

<!-- langtabs-end -->

Now, try changing the `internal_temp` (or `internalTemp`) to something less than `165`, like `150`, and run the code again. You'll see the program take the other path and execute the code inside the `else` block instead. This is how you make your programs dynamic and responsive, just like a chef adjusting their cooking based on observations!

## The Goldilocks Problem (Multi-Path Decisions)

What if you have more than two options? This is like Goldilocks tasting the porridge: one bowl is too hot, one is too cold, and one is just right. An `if/else` statement only gives you two paths, but you can add more paths using `else if` (or `elif` in Python).

This lets you chain conditions together:

1.  **`if`**: Checks the first condition. If it's `true`, the code runs, and the chain is exited.
2.  **`else if`**: If the first condition was `false`, this next condition is checked. You can have as many `else if` blocks as you need.
3.  **`else`**: If none of the above conditions were `true`, this code runs as a fallback.

Let's see how to handle porridge that is too hot, too cold, or just right.

<!-- langtabs-start -->

```py
porridge_temp = 75

if porridge_temp > 85:
  print("This porridge is too hot!")
elif porridge_temp < 65:
  print("This porridge is too cold!")
else:
  print("This porridge is just right.")
```

```js
let porridgeTemp = 75;

if (porridgeTemp > 85) {
  console.log("This porridge is too hot!");
} else if (porridgeTemp < 65) {
  console.log("This porridge is too cold!");
} else {
  console.log("This porridge is just right.");
}
```

<!-- langtabs-end -->

With this structure, you can create clear and effective logic for any number of choices, ensuring your program always knows the right step to take.

### Mini-Exercise 💡

Let's modify the code to assign a letter grade based on a score.
- A: score >= 90
- B: 80 <= score < 90
- C: 70 <= score < 80
- F: score < 70

Try it with a variable score = 85 and see what grade gets printed.
