# Wait for the Water to Boil (While Loops)

In the last section, we used a `for` loop to go through every item on our recipe card. A `for` loop is perfect when you know exactly how many times you need to repeat something—once for each ingredient in a list, for example.

But what if you don't know how many times you need to repeat? What if you need to repeat an action *until* a certain condition is met?

This is where the **`while` loop** comes in. It's like waiting for a pot of water to boil. You don't say, "I'm going to check the temperature 10 times." You say, "**While** the water is not yet boiling, I will keep waiting."

A `while` loop continuously executes a block of code as long as a given condition remains `true`.

### The Danger of a Never-Ending Boil

A `while` loop needs one crucial thing: something inside the loop must eventually change the condition to `false`. If not, the loop will run forever, creating an **infinite loop**.

```admonish warning title="Infinite Loop Warning!"
An infinite loop is a common bug where a loop's condition never becomes `false`. This will cause your program to get stuck and become unresponsive. It’s like a chef who turns on a mixer and forgets to turn it off—it will just keep running until you pull the plug! Always make sure your loop is making progress toward its end condition.
```

Let's simulate our boiling water example. We'll start with a low temperature and keep "heating" it (increasing the value) inside the loop until it reaches the boiling point.

<!-- langtabs-start -->

```python
water_temp = 20 # The starting temperature in Celsius

print("Putting the pot on the stove...")

# The loop will continue as long as this condition is True.
while water_temp < 100:
  print(f"Water is at {water_temp}°C. Still simmering...")
  # This is the crucial part: we change the value we are checking.
  # Each time the loop runs, the temperature gets closer to 100.
  water_temp += 10

# Once water_temp is 100 or more, the condition becomes False,
# and the loop stops. This line runs next.
print(f"Ding! The water is at {water_temp}°C. Time to add the pasta!")
```

```javascript
let waterTemp = 20; // The starting temperature in Celsius

console.log("Putting the pot on the stove...");

// The loop will continue as long as this condition is true.
while (waterTemp < 100) {
  console.log(`Water is at ${waterTemp}°C. Still simmering...`);
  // This is the crucial part: we change the value we are checking.
  // Each time the loop runs, the temperature gets closer to 100.
  waterTemp += 10;
}

// Once waterTemp is 100 or more, the condition becomes false,
// and the loop stops. This line runs next.
console.log(`Ding! The water is at ${waterTemp}°C. Time to add the pasta!`);
```

<!-- langtabs-end -->

The `while` loop is essential for situations where the number of iterations isn't known beforehand, like waiting for a user to type "quit", processing data until a file ends, or, in our final project, giving a player guesses until they win or run out of tries.
