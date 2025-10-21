# Checking if it's Done (Comparisons)

How does a program know if a user is old enough to enter a site, or if an item is in stock? It asks a question by **comparing** two values.

In Module 2, you learned about the **boolean** data type, which can only be `true` or `false`. You'll rarely type `true` or `false` directly. Instead, they are the answers your program gets from asking a question.

Think of a comparison operator as the question itself. For example, to ask "is the oven temperature greater than 400 degrees?", you use the `>` operator. The computer will evaluate this question and answer with either `true` or `false`.

Here are the most common operators:

| Operator | Meaning | Example | Result |
| :---- | :---- | :---- | ----- |
| \== | Is equal to? | 5 \== 5 | TRUE |
| \!= | Is not equal to? | 5 \!= 6 | TRUE |
| \> | Is greater than? | 5 \> 4 | TRUE |
| \< | Is less than? | 5 \< 4 | FALSE |
| \>= | Is greater than or equal to? | 5 \>= 5 | TRUE |
| \<= | Is less than or equal to? | 5 \<= 4 | FALSE |

> **Heads up\!** A very common mistake is using a single equals sign `=` (which assigns a value) instead of a double `==` (which asks if values are equal).

Let's see it in action. The code below doesn't just print the number `21`; it prints the *answer* to the question "is the `age` variable greater than or equal to 18?"

<!-- langtabs-start -->

```py
age = 21

# The computer evaluates the comparison (21 >= 18) and gets `True`.
# Then it prints that result.
print(age >= 18)

# This comparison (21 < 18) evaluates to `False`.
print(age < 18)
```

```js
let age = 21;

// The computer evaluates the comparison (21 >= 18) and gets `true`.
// Then it logs that result.
console.log(age >= 18);

// This comparison (21 < 18) evaluates to `false`.
console.log(age < 18);
```

<!-- langtabs-end -->

Try changing the value of `age` and see how the output changes from `true` to `false`.
