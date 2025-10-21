# The Secret Ingredient Challenge (Number Guesser)

You've learned the core concepts, from setting up your kitchen with `variables` to following a recipe with `loops` and `if/else` statements. Now it's time to put it all together and create your first real program!

This is your final project for the Core Concepts section. The goal is not just to get the right answer, but to practice thinking like a programmer: breaking a big problem down into small, manageable steps.

### The Scenario

You are a master baker who has just discovered a new, secret ingredient. It promises to make the world's most delicious cake!

The problem? This ingredient is very sensitive to heat. You need to find the **optimal baking temperature** to create the perfect cake. If it's too cold, the cake will be a gooey mess. If it's too hot, it will burn to a crisp.

You only have enough of the secret ingredient for a few attempts before you run out!

### Your Goal: The Program's Recipe

Your challenge is to write a program that simulates this baking experiment. Think of the list below as the recipe card you need to follow. Your code should perform these steps:

1.  **Set the Secret Temperature:** The computer needs to pick a secret whole number between 300 and 400. This will be the `optimal_temperature` that the player is trying to guess.
    *   *Hint: You'll need a way to generate a random number.*

2.  **Set the Number of Tries:** You only have enough ingredients for 7 attempts. You'll need a variable to keep track of this.

3.  **Create a Welcome Message:** Print a few lines to the screen to welcome the player and explain the rules of the challenge.

4.  **Loop Through the Attempts:** The core of your program will be a loop that repeats for each attempt the player has.

5.  **Get the Player's Guess:** Inside the loop, you must ask the player to enter their guess and store their answer in a variable.
    *   *Hint: Remember that user input is text. You'll need to convert it to a number.*

6.  **Check the Guess:** Using `if/else` logic, compare the player's guess to the secret temperature and give them feedback:
    *   If their guess is too low, print a message like: "Too cold! The cake is gooey. Try a higher temperature."
    *   If their guess is too high, print a message like: "Too hot! The cake is burnt. Try a lower temperature."
    *   If they guess correctly, print a success message and end the game.
    *   *Hint: If the player wins, you'll need a way to stop the loop early.*

7.  **Handle the "Game Over" Case:** If the loop finishes and the player has not guessed the correct number, the game is over. You should print a final message telling them they've run out of the ingredient and what the correct temperature was.

### Your Turn to Cook!

You now have all the "ingredients" (the concepts) you need to complete this challenge. Before you look at the solution on the next page, open up your favorite code editor (or even a simple text file) and try to write this program yourself.

Don't worry about getting it perfect on the first try! The real learning happens when you're trying to figure things out.

**Stuck on a step? Review these concepts:**

*   Need to store the secret number or the number of tries? Review **[Variables](../concepts/module-1/variables.md)**.
*   Need to repeat the guessing process? A **[For Loop](../concepts/module-4/for-loops.md)** is your best tool.
*   Need to check if the guess is too high or low? You'll need **[Comparisons](../concepts/module-3/comparisons.md)** and **[If/Else Statements](../concepts/module-3/if-else.md)**.

Give it your best shot! When you're ready, or if you get really stuck, head to the next page to see our completed recipe and a full breakdown of the code.

**[Proceed to the Solution -->]**
