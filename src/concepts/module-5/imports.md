# Kitchen Gadgets (Imports)

A great chef doesn't make every single tool from scratch. They use pre-made kitchen gadgets—like a stand mixer or a food processor—to do complex jobs easily.

In programming, this is done by **importing libraries** or **modules**. A library is a collection of pre-written functions and tools that you can use in your own code. You don't need to know *how* the stand mixer works internally; you just need to know how to turn it on.

A common example of a "gadget" you'll use is one that generates random numbers. This is essential for building games, simulations, or anything with an element of unpredictability.

Let's see how to import and use a random number generator.

<!-- langtabs-start -->

```python
# In Python, we use the 'import' keyword to bring in the 'random' library.
import random

# Now we can use functions from that library.
# random.randint(a, b) gives us a random whole number between a and b (inclusive).
random_number = random.randint(1, 10)

print("Here is a random number between 1 and 10:", random_number)
```

```javascript
// JavaScript has a built-in Math object that can do this without an import.
// Math.random() gives a random decimal between 0 and 0.99...
// So, we use a common formula to get a whole number in a specific range.

// This formula gives us a random whole number between 1 and 10.
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Here is a random number between 1 and 10:", randomNumber);
```

<!-- langtabs-end -->

Another example.

Let's tackle a common task: you buy a carton of fresh milk, and you know it expires in 7 days. You want your program to calculate that future date and print it in a simple, readable format like "Month Day, Year".

This sounds easy, but formatting dates can be surprisingly tricky with the basic built-in tools. This is a perfect job for a specialized "date-gadget".

To solve this, we will:
1.  **Import** a specialized library for handling dates.
2.  Get the current date.
3.  Add 7 days to it.
4.  Format the new date into a clean string.

Notice how both languages need to `import` a tool to get this done effectively.

<!-- langtabs-start -->

```python
# We must import tools from Python's built-in 'datetime' library.
# We are specifically importing the 'date' tool and the 'timedelta' tool.
from datetime import date, timedelta

# 1. Get today's date.
today = date.today()

# 2. Create a "time duration" of 7 days.
duration = timedelta(days=7)

# 3. Add the duration to today's date to get the future date.
expiration_date = today + duration

# 4. Format both dates into a readable string (e.g., "Oct 28, 2025").
# The codes %b, %d, %Y are formatting codes for Month, Day, Year.
formatted_today = today.strftime("%b %d, %Y")
formatted_date = expiration_date.strftime("%b %d, %Y")

print("Today's date is:", formatted_today)
print("The milk will expire on:", formatted_date)
```

```javascript
// JavaScript's built-in Date object can handle this, though it can be
// a bit more verbose than using a dedicated library.

// No import is needed for this, but if we were using a library like
// date-fns, it would look like this:
// import { format, addDays } from 'date-fns';

// 1. Get today's date.
const today = new Date();

// 2. Create a "time duration" of 7 days.
const duration = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// 3. Add the duration to today's date to get the future date.
const expirationDate = new Date(today.getTime() + duration);

// 4. Format both dates into a readable string (e.g., "Oct 28, 2025").
const options = { month: 'short', day: 'numeric', year: 'numeric' };
const formattedToday = today.toLocaleDateString('en-US', options);
const formattedDate = expirationDate.toLocaleDateString('en-US', options);

console.log("Today's date is: " + formattedToday);
console.log("The milk will expire on: " + formattedDate);
```

<!-- langtabs-end -->

By using external code, you can stand on the shoulders of giants. You can add powerful features like randomness, web requests, or complex math to your programs without having to write them all yourself. It's the key to building bigger and better things, faster.
