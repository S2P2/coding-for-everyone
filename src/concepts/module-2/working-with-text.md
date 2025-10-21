# Chopping and Combining (Working with Text)

Working with numbers is about calculation, but working with text—or **strings**—is about communication. The most common task you'll perform with strings is combining them to create new, more meaningful messages.

This process of joining strings together is called **concatenation**. 🔗

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

This is a fundamental building block. You'll use it to create dynamic text (`"Order: " + orderItem`), generate reports, or display any kind of organized text to a user.
