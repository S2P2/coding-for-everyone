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
