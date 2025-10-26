# Kitchen Stations (Functions)

Imagine you're writing a program and find yourself typing the same three lines of code in multiple places. It works, but it's repetitive and inefficient. If you need to make a change, you have to find and update every single copy.

A **function** solves this problem. A function is a named block of code that performs a specific task. You **define** it once, and then you can **call** it by name whenever you need it.

Think of it as creating a master recipe for a common task, like "prepare the kitchen." The recipe has a set of steps.

1. **Defining the function** is like writing down the recipe on a card and giving it a name. The code inside doesn't run yet. You're just saving it for later.
2. **Calling the function** is like saying, "Okay, time to follow the 'prepare the kitchen' recipe." The program jumps to the function, runs all the code inside it, and then comes back to where it left off.

Let's see this in action. We'll define a function to prepare the kitchen.

<!-- langtabs-start -->
```py
# 1. DEFINE the function for a repeatable task.
def prepare_station():
  print("Wash hands and put on an apron.")
  print("Gather all ingredients and tools.")
  print("Clear the countertop.")

# 2. CALL the function whenever you start cooking.
print("Preparing to bake bread...")
prepare_station()

print("---")
print("Preparing to make a salad...")
prepare_station()
```

```js
// 1. DEFINE the function for a repeatable task.
function prepareStation() {
  console.log("Wash hands and put on an apron.");
  console.log("Gather all ingredients and tools.");
  console.log("Clear the countertop.");
}

// 2. CALL the function whenever you start cooking.
console.log("Preparing to bake bread...");
prepareStation();

console.log("---")
console.log("Preparing to make a salad...");
prepareStation();
```

<!-- langtabs-end -->

Functions are the most important organizational tool in programming. They let you write code once and use it everywhere, making your programs cleaner, shorter, and much easier to manage.

### Mini-Exercise 💡

1. Define a function called **`greet_the_day`**.
2. Inside the function, write the code to print a short, encouraging message, such as:
    * "Good morning, sunshine!"
    * "Let's make today great!"
3. **Call the function three times** to start the day with multiple positive affirmations.
