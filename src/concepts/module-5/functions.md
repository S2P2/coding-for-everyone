# Kitchen Stations (Functions)

Imagine you're writing a program and find yourself typing the same three lines of code in multiple places. It works, but it's repetitive and inefficient. If you need to make a change, you have to find and update every single copy.

A **function** solves this problem. A function is a named block of code that performs a specific task. You **define** it once, and then you can **call** it by name whenever you need it.

Think of it as creating a master recipe for a common task, like "prepare the kitchen." The recipe has a set of steps.

1. **Defining the function** is like writing down the recipe on a card and giving it a name. The code inside doesn't run yet. You're just saving it for later.
2. **Calling the function** is like saying, "Okay, time to follow the 'prepare the kitchen' recipe." The program jumps to the function, runs all the code inside it, and then comes back to where it left off.

Let's see this in action. We'll define a function to handle a standard greeting.

<!-- langtabs-start -->
```py
# 1. DEFINE the function and give it a name.
# This code is now saved under the name 'show_welcome_message'.
def show_welcome_message():
  print("Welcome to the kitchen!")
  print("Let's get cooking.")

# 2. CALL the function to execute the code inside it.
# The program will now print the two lines from above.
show_welcome_message()

# The best part? You can call it as many times as you want!
print("---")
show_welcome_message()
```

```js
// 1. DEFINE the function and give it a name.
// This code is now saved under the name 'showWelcomeMessage'.
function showWelcomeMessage() {
  console.log("Welcome to the kitchen!");
  console.log("Let's get cooking.");
}

// 2. CALL the function to execute the code inside it.
// The program will now log the two lines from above.
showWelcomeMessage();

// The best part? You can call it as many times as you want!
console.log("---");
showWelcomeMessage();
```

<!-- langtabs-end -->

Functions are the most important organizational tool in programming. They let you write code once and use it everywhere, making your programs cleaner, shorter, and much easier to manage.
