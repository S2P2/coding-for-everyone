# The Secret Recipe (Solution)

This is just possible solution.

Don't be intimidated by the full block of code. We'll break it down piece by piece right after. This is what the finished recipe looks like.

<!-- langtabs-start -->

```python
# We need this library to generate a random number
import random

# --- 1. The Setup (Mise en Place) ---
# The computer chooses a secret temperature between 300 and 400.
optimal_temperature = random.randint(300, 400)
number_of_attempts = 7

print("You've discovered a secret ingredient!")
print("Let's find the perfect temperature to bake the cake.")
print(f"You have {number_of_attempts} attempts. Good luck!")
print("------------------------------------------")


# --- 2. The Baking Loop ---
# This loop will run for the number of attempts we have.
for attempt_number in range(1, number_of_attempts + 1):
    # --- 3. Get the User's Guess ---
    # We ask for input and convert it to an integer (a whole number).
    guess = int(input(f"Attempt #{attempt_number}: Enter your guess (300-400): "))

    # --- 4. The Logic (Check the Result) ---
    if guess < optimal_temperature:
        print(f"Your guess of {guess}°F is too cold! The cake is gooey and undercooked. Try a higher temperature.")
    elif guess > optimal_temperature:
        print(f"Your guess of {guess}°F is too hot! The cake is burnt to a crisp! Try a lower temperature.")
    else:
        # This code runs if the guess is exactly right.
        print(f"Perfection! {guess}°F is the exact temperature. The cake is golden-brown and delicious.")
        print("You've mastered the secret ingredient!")
        break # Exit the loop immediately since we won.

# --- 5. The "Game Over" Condition ---
# This part of the code only runs if the loop finishes WITHOUT a 'break'.
# This means the player ran out of tries.
else:
    print("\nOh no! You've run out of the secret ingredient.")
    print(f"The correct temperature was {optimal_temperature} degrees. Better luck next time!")

```

```javascript
// --- 1. The Setup (Mise en Place) ---
// The computer chooses a secret temperature between 300 and 400.
const optimalTemperature = Math.floor(Math.random() * 101) + 300; // Result is between 300 and 400
const numberOfAttempts = 7;

console.log("You've discovered a secret ingredient!");
console.log("Let's find the perfect temperature to bake the cake.");
console.log(`You have ${numberOfAttempts} attempts. Good luck!`);
console.log("------------------------------------------");

// We'll track if the player won inside the loop
let hasWon = false;

// --- 2. The Baking Loop ---
// This loop will run for the number of attempts we have.
for (let attemptNumber = 1; attemptNumber <= numberOfAttempts; attemptNumber++) {
    // --- 3. Get the User's Guess ---
    // We ask for input and convert it to an integer (a whole number).
    let guess = parseInt(prompt(`Attempt #${attemptNumber}: Enter your guess (300-400):`));

    // --- 4. The Logic (Check the Result) ---
    if (guess < optimalTemperature) {
        alert(`Your guess of ${guess}°F is too cold! The cake is gooey and undercooked. Try a higher temperature.`);
    } else if (guess > optimalTemperature) {
        alert(`Your guess of ${guess}°F is too hot! The cake is burnt to a crisp! Try a lower temperature.`);
    } else {
        // This code runs if the guess is exactly right.
        alert(`Perfection! ${guess}°F is the exact temperature. The cake is golden-brown and delicious. You've mastered the secret ingredient!`);
        hasWon = true; // Mark that the player has won
        break; // Exit the loop immediately since we won.
    }
}

// --- 5. The "Game Over" Condition ---
// After the loop finishes, we check if the player won.
// If they didn't win, it means they ran out of tries.
if (!hasWon) {
    alert(`Oh no! You've run out of the secret ingredient.\nThe correct temperature was ${optimalTemperature} degrees. Better luck next time!`);
}
```

<!-- langtabs-end -->

```admonish info title="Limitation of the playground"
Due to [limitation of the playground](https://mr-addict.github.io/mdbook-repl/limitations.html), we cannot run code with input on this site yet

Try copy code to run on your computer.
For online playground:
- Python: [Programiz Python Online Compiler](https://www.programiz.com/online-compiler/1Hh4oeIa2LmpU)
- JavaScript: [Programiz JavaScript Online Compiler](https://www.programiz.com/online-compiler/71ZdY4jaORiGG), or your browser (press F12 for most browser, paste the code and run)
```

## Breaking Down the Recipe

Let's look at how the code works, section by section.

### 1. The Setup (Mise en Place)
Just like in cooking, we first prepare our ingredients. In coding, this means setting up our initial **variables**.

-   `optimal_temperature`: We use a special function to get a random number. This is our goal.
-   `number_of_attempts`: We store `7` in a variable so it's easy to change later if we want.
-   We then print some welcome messages to set the scene for the player.

### 2. The Baking Loop
We need to repeat the guessing process, and a **`for` loop** is the perfect tool for that. We tell it to run exactly `number_of_attempts` times. For each loop, it keeps track of the `attempt_number`.

### 3. Getting the User's Guess
Inside the loop, we ask the user for their guess. The input from a user is always treated as text (**string**), so we have to convert it into a number (**integer**) before we can do any math or comparisons with it.

### 4. The Logic (Checking the Result)
This is the heart of our program—a big `if/elif/else` (or `if/else if/else`) block. This is where we make decisions.
-   The `if` checks if the guess is **less than** (`<`) the secret number.
-   The `elif`/`else if` checks if the guess is **greater than** (`>`) the secret number.
-   If neither of those is true, the only possibility left is that the guess is **equal to** the secret number, so the `else` block runs, and the player wins!

When the player wins, we use the `break` command to immediately stop the loop. There's no need to keep guessing.

### 5. The "Game Over" Condition
What happens if the player never guesses the right number? The `for` loop will simply finish all of its cycles. The code after the loop is our "game over" message, which only runs if the player ran out of attempts without hitting a `break`.

Congratulations! You've just walked through the logic for a complete, working game. You combined all the core concepts into a fun, interactive project. Now it's your turn to be the chef—try running the code and playing it yourself
