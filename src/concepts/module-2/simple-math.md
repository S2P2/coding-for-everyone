# The Kitchen Scale (Simple Math)

Simple Math (Code as a Calculator) One of the most powerful and straightforward things you can do with code is math. At its core, a computer is just a very, very fast calculator. You can use standard arithmetic operators right in your code to add, subtract, multiply, and divide.

The most common operators are:

* `+` (Addition)
* `-` (Subtraction)
* `*` (Multiplication)
* `/` (Division)

You can perform calculations directly or use variables that hold numbers.

<!-- langtabs-start -->

```py
# You can do math with numbers...
pizzas = 3
slices_per_pizza = 8
total_slices = pizzas * slices_per_pizza

print(total_slices) # This will display 24

# ...and with other variables
eaten_slices = 5
remaining_slices = total_slices - eaten_slices

print(remaining_slices) # This will display 19
```

```js
// You can do math with numbers...
let pizzas = 3;
let slices_per_pizza = 8;
let totalSlices = pizzas * slices_per_pizza;

console.log(totalSlices); // This will display 24

// ...and with other variables
let eatenSlices = 5;
let remainingSlices = totalSlices - eatenSlices;

console.log(remainingSlices); // This will display 19
```

<!-- langtabs-end -->

Just like in school, programming languages follow an **order of operations** (like PEMDAS/BODMAS), so multiplication and division happen before addition and subtraction.

### Mini-Exercise 💡

- Try using it like simple calculator: `(2+3)*60/5`

- Imagine you're buying snacks.

  1.  Create a variable for the price of a bag of chips, and another for the price of a soda.
  2.  Create a variable for the number of bags of chips you want to buy, and another for the number of sodas.
  3.  Calculate the total cost of the chips (price * quantity).
  4.  Calculate the total cost of the sodas (price * quantity).
  5.  Calculate the final total cost of all the snacks and print it to the screen.
