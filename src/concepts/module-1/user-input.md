# Taking an Order (User Input)

So far, our program can talk, but it can't listen. We've used `print()` to display messages, but what if we want to ask the user a question and use their answer?

Getting information from the user is called **user input**. Think of it as your program taking a customer's order. It asks a question, waits for an answer, and then stores that answer in a variable to use later.

<!-- langtabs-start -->

```python
# The input() function displays a prompt and waits for the user to type something.
# Whatever the user types is stored in the 'user_name' variable.
order_item = input("Welcome to our cafe! What would you like to order? ")

# Now we can use that variable to confirm the order.
print("Great choice! So you'd like to order", order_item, ". Coming right up!")

```

```javascript
// The prompt() function displays a pop-up box with a message (if run using browser).
// Whatever the user types is stored in the 'userName' variable.
let orderItem = prompt("Welcome to our cafe! What would you like to order? ");

// Now we can use that variable to confirm the order.
console.log("Great choice! So you'd like to order " + orderItem + ". Coming right up!");

```

<!-- langtabs-end -->

example output:

```
Welcome to our cafe! What would you like to order? Coffee
Great choice! So you'd like to order Coffee. Coming right up!
```

```admonish info title="Limitation of the playground"
Due to [limitation of the playground](https://mr-addict.github.io/mdbook-repl/limitations.html), we cannot run code with input on this site yet

Try copy code to run on your computer.
For online playground:
- Python: [Programiz Python Online Compiler](https://www.programiz.com/online-compiler/3BWDQzDElFCOR)
- JavaScript: [Programiz JavaScript Online Compiler](https://www.programiz.com/online-compiler/45rvitLN1VQj2), or your browser (press F12 for most browser, paste the code and run)
```

User input is almost always received as a string (text)
If you ask for a number and want to do math with it, you'll need to convert it first!

We'll see how to do that in our final project.
