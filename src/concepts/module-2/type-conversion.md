# Changing Ingredients: Type Conversion

Imagine your recipe calls for "one cup of finely ground almonds," but all you have are whole almonds. You can't just throw the whole almonds into the cake batter. First, you need to **convert** them from one form (whole) to another (ground).

Programming is the same. Sometimes you have a piece of information in one data type, like a **string**, but you need it to be a **number** to do math. The process of changing a value from one data type to another is called **type conversion** or **type casting**.

### Why is This So Important? The User Input Problem

This is one of the most common tasks for a new programmer. Let's look at a critical rule:

> **Any input you get from a user is *always* treated as a string (text), even if they type in numbers.**

If you ask a user for their age and they type `25`, the computer doesn't see the number 25. It sees the text characters `"2"` and `"5"`.

What happens if you try to do math with text? When you use the `+` operator on strings, it joins them together (a process called concatenation) instead of adding them mathematically.

<!-- langtabs-start -->

```python
# The computer sees two pieces of text, not numbers.
age_as_text = "25"
five_as_text = "5"

# The '+' sign on strings means "join them together" (concatenation).
# It's like putting two labels side-by-side.
result = age_as_text + five_as_text

print("The 'result' is:", result)
print("The data type of the result is:", type(result))
```

```javascript
// The computer sees two pieces of text, not numbers.
let ageAsText = "25";
let fiveAsText = "5";

// The '+' sign on strings means "join them together" (concatenation).
// It's like putting two labels side-by-side.
let result = ageAsText + fiveAsText;

console.log("The 'result' is:", result);
console.log("The data type of the result is:", typeof result);
```

<!-- langtabs-end -->

Instead of `30`, you get `"255"`! The computer simply stuck the text together. To perform a real calculation, we must first convert the text into numbers.

### Converting Text to Numbers

To fix this, we use special built-in functions to "grind" our text into a usable number, like an **integer** (a whole number) or a **float** (a number with a decimal).

Let's try our example again, this time with the correct conversion step.

<!-- langtabs-start -->

```python
# The user types "25", and we store it as text.
age_as_text = "25"
print(f"Original data type: {type(age_as_text)}")

# --- The Conversion Step ---
# In Python, the int() function converts a string to an integer.
# To convert to a decimal (float), you would use float().
age_as_number = int(age_as_text)
print(f"Converted data type: {type(age_as_number)}")

# Now we can do math!
future_age = age_as_number + 5
print("In 5 years, your age will be:", future_age)
```

```javascript
// The user types "25", and we store it as text.
let ageAsText = "25";
console.log(`Original data type: ${typeof ageAsText}`);

// --- The Conversion Step ---
// In JavaScript, parseInt() converts a string to an integer.
// To convert to a decimal (float), you would use parseFloat().
let ageAsNumber = parseInt(ageAsText);
console.log(`Converted data type: ${typeof ageAsNumber}`);

// Now we can do math!
let futureAge = ageAsNumber + 5;
console.log("In 5 years, your age will be:", futureAge);
```

<!-- langtabs-end -->

Success! By converting the string into a number, the `+` operator correctly performed addition.

### Converting Numbers to Text

Sometimes you need to do the reverse. You might have a number that you want to join with text to create a clear message. While many modern languages can handle this automatically in print statements (using features like f-strings or template literals), it's good practice to know how to explicitly convert a number back into a string.

<!-- langtabs-start -->

```python
number_of_attempts = 5

# In Python, the str() function converts any value into a string.
message = "You have " + str(number_of_attempts) + " attempts left."
print(message)

# Note: Python's f-strings handle this conversion for you automatically!
# This is why they are so convenient.
message_with_fstring = f"You have {number_of_attempts} attempts left."
print(message_with_fstring)
```

```javascript
let numberOfAttempts = 5;

// In JavaScript, the .toString() method can be called on a number
// to convert it to a string.
let message = "You have " + numberOfAttempts.toString() + " attempts left.";
console.log(message);

// Note: JavaScript's template literals handle this conversion for you automatically!
// This is why they are so convenient.
let messageWithLiteral = `You have ${numberOfAttempts} attempts left.`;
console.log(messageWithLiteral);
```

<!-- langtabs-end -->

```admonish warning title="Invalid Conversions"
What happens if you try to convert the word `"hello"` into a number? Your program will crash!

It’s like trying to grind a rock in your coffee grinder—the tool isn't designed for that material and it will break. Always make sure the string you are converting actually contains a number. We'll learn how to handle potential errors like this in more advanced lessons.
```

### Mini-Exercise 💡

You now have a crucial tool for making your programs interactive. You can take input from a user, convert it to the right data type, and use it in your logic.

Write a simple program that does the following:
1.  Asks the user for their year of birth.
2.  Converts the input string to a number.
3.  Calculates their approximate age (current year - birth year).
4.  Prints a message like: `"You are approximately [age] years old."`
