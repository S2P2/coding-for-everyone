# Prep Bowls (Variables)

A variable is a labeled container for a piece of information, like using a labeled bowl for an ingredient. This practice, known in cooking as *mise en place*, keeps your code organized and easy to read.

The equals sign (`=`) is the **assignment operator**. It's an action, not a question. It means: "Put the value on the right into the container on the left."

<!-- langtabs-start -->

```python
# Create a variable 'number_of_eggs' and assign the value 3 to it.
number_of_eggs = 3

# Now we can use the variable's name to get its value.
# This will display the number 3.
print(number_of_eggs)
```

```js
// Create a variable 'numberOfEggs' and assign the value 3 to it.
let numberOfEggs = 3;

// Now we can use the variable's name to get its value.
// This will display the number 3.
console.log(numberOfEggs);
```

<!-- langtabs-end -->

By using variables, you can store information and refer to it by name anywhere in your program.

```admonish info title="A Note on Style"
You'll notice Python code uses `snake_case` (words separated by underscores) while JavaScript uses `camelCase` (the first letter of each new word is capitalized). These are style conventions for each language. Following them makes your code easier for other programmers to read!
```

```admonish info title="Summary of Naming Conventions" collapsible=true

**Case Style Definitions**

*   **`camelCase`**: The first letter of the first word is lowercase, and the first letter of each subsequent word is capitalized. Example: `numberOfUsers`.
*   **`PascalCase`**: The first letter of every word is capitalized. Also known as UpperCamelCase. Example: `UserAccount`.
*   **`snake_case`**: All words are lowercase and separated by an underscore. Example: `user_account`.
*   **`SCREAMING_SNAKE_CASE`**: All words are uppercase and separated by an underscore. Used for constants. Example: `MAX_LOGIN_ATTEMPTS`.

**A Universal Convention: `PascalCase` for Types**

Across all the languages in this guide (Python, JavaScript, Go, C#, PHP, and Rust), the standard convention for naming classes, structs, enums, or any other custom type is **`PascalCase`**. For example: `SimpleUser`, `HttpRequest`, `DatabaseConnection`.

| Language | Variable & Function | Constants | Notes |
| :--- | :--- | :--- | :--- |
| **Python** | `snake_case` | `SCREAMING_SNAKE_CASE` | Follows the [PEP 8 style guide](https://peps.python.org/pep-0008/).<br>Strongly enforced by the community. |
| **JavaScript**| `camelCase` | `SCREAMING_SNAKE_CASE` | `PascalCase` is used only for constructor functions/classes.<br>This is the universally accepted convention. |
| **Go** | `camelCase` or `PascalCase` | `PascalCase` | Case determines visibility:<br>- `camelCase` (lowercase start) is private.<br>- `PascalCase` (uppercase start) is public/exported. |
| **C#** | `camelCase` | `PascalCase` | `camelCase` for local variables/parameters.<br>`PascalCase` for public methods/properties.<br>Private fields are often `_camelCase`. |
| **PHP** | `camelCase` | `SCREAMING_SNAKE_CASE` | Modern PHP (e.g., Laravel, Symfony) uses `camelCase`.<br>You may see `snake_case` in older code or WordPress. |
| **Rust** | `snake_case` | `SCREAMING_SNAKE_CASE` | Follow the [Rust API naming guide](https://rust-lang.github.io/api-guidelines/naming.html). <br>The `rustc` compiler is very strict about these conventions<br>and will issue warnings if they are not followed. |
```
