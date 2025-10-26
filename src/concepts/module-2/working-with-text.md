# Chopping and Combining (Working with Text)

Working with numbers is about calculation, but working with text—or **strings**—is about communication. You'll constantly need to prepare your text to be shown to a user, whether it's a welcome message, a menu item, or an error warning.

Let's look at the three most common ways you'll work with strings: combining them, inspecting their properties, and changing their style.

### 1. Combining: "Pen Pineapple Apple Pen"

The most frequent task you'll perform with strings is joining them together to create new, more meaningful messages. This process is called **concatenation**. 🔗

It's like connecting two train cars to make a longer train. In many languages, you can use the same `+` symbol you used for addition to concatenate strings.

<!-- langtabs-start -->

```py
first_part = "Pen Pineapple"
second_part = "Apple Pen"

# Concatenate the strings with a space in between
combined = first_part + " " + second_part

print(combined) # Displays "Pen Pineapple Apple Pen"
```

```js
let firstPart = "Pen Pineapple";
let secondPart = "Apple Pen";

// Concatenate the strings with a space in between
let combined = firstPart + " " + secondPart;

console.log(combined); // Displays "Pen Pineapple Apple Pen"
```

<!-- langtabs-end -->

You got [Pen Pineapple Apple Pen](https://www.youtube.com/watch?v=NfuiB52K7X8)!

Notice that we had to add a space `" "` in the middle. The computer is extremely literal; it only combines *exactly* what you give it. Without that space, the result would have been `"Pen PineappleApple Pen"`.

### 2. Inspecting: "Is the Username Too Long?"

Sometimes you don't need to change the text, but you need to get information *about* it. The most common piece of information you'll need is its **length**.

This is useful for checking things like, "Is this username less than 15 characters?" or "Will this menu item name fit on the display?"

<!-- langtabs-start -->

```py
# In Python, we use the len() function to get the length of a string.
menu_item = "Extra Cheesy Supreme Pizza"
item_length = len(menu_item)

print("Menu Item:", menu_item)
print("Character Count:", item_length)

# Now we can use this information in a decision!
if item_length > 20:
  print("Warning: This name might be too long for the menu board!")

```

```js
// In JavaScript, we use the .length property to get the length of a string.
let menuItem = "Extra Cheesy Supreme Pizza";
let itemLength = menuItem.length;

console.log("Menu Item:", menuItem);
console.log("Character Count:", itemLength);

// Now we can use this information in a decision!
if (itemLength > 20) {
  console.log("Warning: This name might be too long for the menu board!");
}
```
<!-- langtabs-end -->

### 3. Styling: "Shouting the Daily Special"

Often, you'll need to change the case of a string for formatting purposes. For example, you might want to display a heading in all capital letters or normalize user input by converting it all to lowercase.

Think of it like deciding how to write something on a menu board. Do you want to SHOUT IT, or write it in normal case?

<!-- langtabs-start -->

```py
daily_special = "Classic Burger with Fries"

# To make a big headline for the menu board, we use .upper()
shouted_special = daily_special.upper()
print(shouted_special) # Displays: CLASSIC BURGER WITH FRIES

# To store it in a database consistently, we might use .lower()
normalized_special = daily_special.lower()
print(normalized_special) # Displays: classic burger with fries
```

```js
let dailySpecial = "Classic Burger with Fries";

// To make a big headline for the menu board, we use .toUpperCase()
let shoutedSpecial = dailySpecial.toUpperCase();
console.log(shoutedSpecial); // Displays: CLASSIC BURGER WITH FRIES

// To store it in a database consistently, we might use .toLowerCase()
let normalizedSpecial = dailySpecial.toLowerCase();
console.log(normalizedSpecial); // Displays: classic burger with fries
```
<!-- langtabs-end -->

These three operations—combining, checking length, and changing case—are the essential tools in your text-handling toolkit. You'll use them constantly to build dynamic, readable, and user-friendly programs.

### Mini-Exercise 💡

1.  Create two string variables, one for your first name and one for your last name.
2.  Combine them to create your full name, and store it in a new variable. Make sure to include a space between the names!
3.  Print your full name to the screen.
4.  Print the length of your full name.
5.  Print your full name in all uppercase letters.
