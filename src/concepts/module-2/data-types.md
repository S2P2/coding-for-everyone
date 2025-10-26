# The Food Groups (Data Types)

In the last module, we used variables to store information in labeled containers. But the computer needs to know _what kind_ of information it's storing. Is it a number you can do math with? Or is it text for display?

These different kinds of information are called **data types**. Think of them like categories of ingredients: you have liquids (water, oil), solids (vegetables, meat), and powders (flour, sugar). Each type has different properties and uses.

Let's look at the three most common data types.

### Strings (Text)

Anytime you see text wrapped in quotation marks (`"` or `'` ), you're looking at a **string**. It's the data type for storing words, sentences, or any sequence of characters.

<!-- langtabs-start -->

```py
# A variable holding a string
todays_special_menu = "Chef's Special Burger"

print(todays_special_menu)
```

```js
// A variable holding a string
todays_special_menu = "Chef's Special Burger"

console.log(todays_special_menu);
```

<!-- langtabs-end -->

### Numbers (Integers and Floats)

Numbers are for... well, numbers\! You use them for counting, calculations, and measurements. Unlike strings, you don't wrap them in quotes.

Most languages have two main types of numbers:

- **Integers**: Whole numbers, like `1`, `42`, or `-10`.
- **Floats** (or "floating-point numbers"): Numbers with a decimal point, like `3.14`, `99.9`, or `-0.5`.

<!-- langtabs-start -->

```py
# An integer
quantity = 5

# A float
price = 19.99

print(quantity)
print(price)
```

```js
// An integer
let quantity = 5;

// A float
let price = 19.99;

console.log(quantity);
console.log(price);
```

<!-- langtabs-end -->

```admonish note title="Numbers: Varied Implementations, Same Purpose" collapsible=true
Numbers are fundamental for mathematical operations across all programming languages, but their implementation varies.

Other programming languages offer distinct integer and floating-point types (e.g., `int32`, `f64`) with different sizes for memory optimization and precision. In contrast, Python dynamically handles integer size, and JavaScript uses a single `Number` type for both.

The core idea remains: numbers are for calculations!
```

### Booleans (True or False)

A **boolean** is the simplest data type. It can only have one of two values: `true` or `false`. Think of it as a light switch—it's either on or off. There's no in-between.

You won't often write `true` or `false` directly. Instead, they are typically the answer to a question your code asks, like "is the oven temperature over 400 degrees?" We'll explore this more in the next module on logic.

<!-- langtabs-start -->

```py
# A boolean
is_oven_preheated = True

print(is_oven_preheated)
```

```js
// A boolean
let isOvenPreheated = true;

console.log(isOvenPreheated);
```

<!-- langtabs-end -->
