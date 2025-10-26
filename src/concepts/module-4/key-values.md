# The Recipe Card (Name-Value Pairs)

So far, we've used lists (the "Pantry") to store collections of items in a specific order. This is great for a sequence of recipe steps or a list of ingredients, where you access items by their position (`0`, `1`, `2`, etc.).

But what if you need to store information that isn't a sequence, but a collection of labeled properties? This is where a **dictionary** (or **map**, or **object**, depending on the language) comes in. It's a collection that stores data not by its position, but by a unique **name**.

Think of it as a **Recipe Card**... To find out the cook time, you don't look at the third line; you look for the label that says "Cook Time" and read the value next to it.

This `name: value` pairing is the heart of a dictionary. In programming, the 'name' is officially called a **key**.

-   **Key:** A unique identifier (like a label on the recipe card). It's almost always a string.
-   **Value:** The data associated with that key. It can be any data type: a string, a number, a boolean, or even another list or dictionary!

Let's create a recipe card for a classic dish.

<!-- langtabs-start -->

```python
# A dictionary representing a recipe.
# Notice the {curly braces} and the "key": value syntax.
recipe = {
  "name": "Classic Tomato Soup",
  "servings": 4,
  "cook_time_minutes": 30,
  "is_vegetarian": True
}

# --- Accessing data ---
# To get a value, you use its key inside [square brackets].
print("Dish Name:", recipe["name"])
print("Serves:", recipe["servings"])

# --- Updating data ---
# You can change a value by assigning a new one to its key.
print("\nOops, we have more guests! Let's double the recipe.")
recipe["servings"] = 8
print("Now serves:", recipe["servings"])

# --- Adding new data ---
# You can add a new key-value pair just by assigning it.
recipe["difficulty"] = "Easy"
print("Difficulty:", recipe["difficulty"])
```

```javascript
// An object representing a recipe.
// Notice the {curly braces} and the key: value syntax.
let recipe = {
  name: "Classic Tomato Soup",
  servings: 4,
  cookTimeMinutes: 30,
  isVegetarian: true
};

// --- Accessing data ---
// To get a value, you can use dot notation (recipe.key)
// or square bracket notation (recipe["key"]). Dot notation is more common.
console.log("Dish Name: " + recipe.name);
console.log("Serves: " + recipe.servings);

// --- Updating data ---
// You can change a value by assigning a new one to its key.
console.log("\nOops, we have more guests! Let's double the recipe.");
recipe.servings = 8;
console.log("Now serves: " + recipe.servings);

// --- Adding new data ---
// You can add a new key-value pair just by assigning it.
recipe.difficulty = "Easy";
console.log("Difficulty: " + recipe.difficulty);
```

<!-- langtabs-end -->

Dictionaries are incredibly versatile. You'll use them constantly to represent anything with a set of properties: a user profile (with keys like `username`, `email`, `id`), a product in an online store (`name`, `price`, `sku`), or configuration settings for an application. They are the go-to tool whenever you need to look up a value by its name instead of its numerical position.

### Mini-Exercise 💡

1.  Create a dictionary (or object) to represent a pet.
2.  Include the following keys: `name`, `animal_type` (e.g., "Dog", "Cat"), `age`, and `is_friendly` (a boolean).
3.  Print the pet's name and age.
4.  Update the `age` to be one year older.
5.  Add a new key-value pair for the pet's favorite `food`.
6.  Print the entire pet dictionary.

```admonish note title="About naming convention"
The naming conventions for these keys vary according to the style and standards of the programming language you're using, as we already mentioned in the [Summary of Naming Conventions section in Variables chapter](../../concepts/module-1/variables.html#admonition-summary-of-naming-conventions) .
```
