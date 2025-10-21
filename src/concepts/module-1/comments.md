# Notes in the Margin (Comments)

Comments are notes for humans. The computer that **runs** your program will completely ignore them, much like a note you'd write in the margin of a recipe. Their purpose is to make the code easier for people to understand.

It's important to note that while the program ignores comments during execution, other tools like AI assistants can read them to understand the code's purpose and context.

A good comment explains the **why**, not just the *what*.

### Bad Comment 👎
This comment is redundant because it only states what the code is already doing.

```python,norepl
# Sets the oven temperature to 400.
oven_temperature = 400
```

### Good Comment 👍
This comment is helpful because it explains the reasoning why the temperature is set so high, which isn't obvious from the code itself.

```python,norepl
# Set oven to a high temperature to get a good char on the vegetables.
oven_temperature = 400
```
