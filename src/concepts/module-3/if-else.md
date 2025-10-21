# Taste and Adjust (If/Else Decisions)

Once your program can ask a question with a comparison operator, you need a way to act on the `true` or `false` answer. That's what `if/else` statements are for. They are the fundamental decision-making tool in programming.

The structure is just like a sentence you'd use in real life:

"**If** *some condition is true*, then do this one thing. **Else**, do a different thing."

It’s like a fork in the road for your code. The condition you check must evaluate to either `true` or `false`.

* The code inside the **`if`** block only runs when the condition is `true`.
* The code inside the **`else`** block only runs when the condition is `false`.

Let's build on the example from the last section. Instead of just printing `true` or `false`, we can print a more helpful message.

<!-- langtabs-start -->

```py
age = 21

# The condition (age >= 18) is true...
if age >= 18:
  # ...so this line of code will run.
  print("You are old enough to enter.")
else:
  # This part will be skipped.
  print("Sorry, you are not old enough.")
```

```js
let age = 21;

// The condition (age >= 18) is true...
if (age >= 18) {
  // ...so this line of code will run.
  console.log("You are old enough to enter.");
} else {
  // This part will be skipped.
  console.log("Sorry, you are not old enough.");
}
```

<!-- langtabs-end -->


Now, try changing the `age` to something less than 18, like `15`, and run the code again. You'll see the program take the other path and execute the code inside the `else` block instead. This is how you make your programs dynamic and responsive\!
