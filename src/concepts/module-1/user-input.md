# Taking an Order (User Input)

So far, our program can talk, but it can't listen. We've used `print()` to display messages, but what if we want to ask the user a question and use their answer?

Getting information from the user is called **user input**. Think of it as your program taking a customer's order. It asks a question, waits for an answer, and then stores that answer in a variable to use later.

<!-- langtabs-start -->

```python
# The input() function displays a prompt and waits for the user to type something.
# Whatever the user types is stored in the 'user_name' variable.
user_name = input("Welcome! What is your name? ")

# Now we can use that variable to create a personalized greeting.
print("Hello,", user_name, "! It's great to have you in the kitchen.")
```

```javascript
// The prompt() function displays a pop-up box with a message.
// Whatever the user types is stored in the 'userName' variable.
let userName = prompt("Welcome! What is your name? ");

// Now we can use that variable to create a personalized greeting.
console.log("Hello, " + userName + "! It's great to have you in the kitchen.");
```

<!-- langtabs-end -->

```admonish info title="Limitation of the playground"
Due to [limitation of the playground](https://mr-addict.github.io/mdbook-repl/limitations.html), we cannot run code with input on this site yet

Try copy code to run on your computer.
For online playground:
- Python: [Programiz Python Online Compiler](https://www.programiz.com/online-compiler/5DnkuqG8q09Hq)
- JavaScript: [Programiz JavaScript Online Compiler](https://www.programiz.com/online-compiler/3YHV2IHfKtQXg), or your browser (press F12 for most browser, paste the code and run)
```

User input is almost always received as a string (text)
If you ask for a number and want to do math with it, you'll need to convert it first!

We'll see how to do that in our final project.
```

Now your programs can be interactive, creating a two-way conversation with your user!
