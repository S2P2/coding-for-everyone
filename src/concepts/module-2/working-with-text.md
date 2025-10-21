# Chopping and Combining (Working with Text)

Working with numbers is about calculation, but working with text—or **strings**—is about communication. The most common task you'll perform with strings is combining them to create new, more meaningful messages.

This process of joining strings together is called **concatenation**. 🔗

It's like connecting two train cars to make a longer train. In many languages, you can use the same `+` symbol you used for addition to concatenate strings.

<!-- langtabs-start -->

```py
first_name = "Ada"
last_name = "Lovelace"

# Concatenate the strings with a space in between
full_name = first_name + " " + last_name

print(full_name) # Displays "Ada Lovelace"
```

```js
let firstName = "Ada";
let lastName = "Lovelace";

// Concatenate the strings with a space in between
let fullName = firstName + " " + lastName;

console.log(fullName); // Displays "Ada Lovelace"
```

<!-- langtabs-end -->

Notice that we had to add a space `" "` in the middle. The computer is extremely literal; it only combines *exactly* what you give it. Without that space, the result would have been `"AdaLovelace"`.

This is a fundamental building block. You'll use it to create dynamic greetings (`"Hello, " + userName`), generate reports, or display any kind of organized text to a user.
