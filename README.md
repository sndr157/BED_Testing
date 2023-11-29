# JS Unit Testing Examples

Welcome to the JS Unit Testing Examples repository! 🚀 This project is designed to be an illustrative guide for writing effective tests in JavaScript, covering various aspects such as unit testing, API testing, and database interactions. Whether you're a testing enthusiast or just starting, this repository aims to provide clear examples and best practices.

## Why Testing Matters

Testing is a crucial aspect of software development that ensures your code behaves as expected and helps catch bugs early in the development process. In this project, we'll explore different testing scenarios to demonstrate how testing can enhance the reliability and maintainability of your JavaScript code.

## Project Structure

- **`/src`**: Contains the source code for the project.
  - **`api.js`**: Demonstrates API interaction using Axios.
  - **`createUser.js`**: Illustrates a mocked function for user creation.
  - **`isValidUserName.js`**: Provides a function to validate usernames.
- **`/tests`**: Houses the unit tests for the project.
  - **`api.test.js`**: Unit tests for API functions.
  - **`createUser.test.js`**: Unit tests for the `createUser` function.
  - **`isValidUserName.test.js`**: Unit tests for the `isValidUserName` function.
  - **`index.test.js`**: Additional unit tests for the `add` function.
- **`db.json`**: Sample data for users, meals, and orders.

## Getting Started

To dive into the examples, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/js-unit-testing-examples.git


```markdown
# JS Unit Testing Examples

An example project for writing tests in JavaScript.

## Table of Contents
- [Setup](#setup)
- [Package Information](#package-information)
- [API Functions](#api-functions)
- [Testing](#testing)
  - [Unit Testing](#unit-testing)
  - [API Testing](#api-testing)
- [Database](#database)
- [Additional Tests](#additional-tests)

## Setup

To set up the project, run the following commands:

```bash
./setup.sh
npm install -D jest
npm install -D newman
```

## Package Information

### `package.json`

```json
{
  "name": "js-unit-testing-examples",
  "version": "1.0.0",
  "description": "An example project for writing tests in JavaScript.",
  "main": "index.js",
  "type": "module",
  "_moduleDirectories": [
    "src"
  ],
  "scripts": {
    "test": "vitest",
    "test:api": "newman run https://api.postman.com/collections/17255397-01f71f02-5d6b-4096-bbdc-86ba8c6d3f5d?access_key=PMAT-01HA1DMFGWQ9TK077ZFVT9DHGM --env-var \"baseUrl=http://localhost:3000\""
  },
  "author": "Kristof Siket",
  "license": "ISC",
  "devDependencies": {
    "newman": "^5.3.2",
    "vitest": "^0.34.3"
  },
  "dependencies": {
    "axios": "^1.5.0"
  }
}
```

## API Functions

### `api.js`

```javascript
import axios from "axios";

export async function fetchUser(userId) {
  const response = await axios.get(`https://api.example.com/users/${userId}`);
  return response.data;
}

// Add more API functions as needed
```

### `api.test.js`

```javascript
import { vi, expect, it, describe, afterEach } from "vitest";
import { fetchUser } from "../api.js";
import axios from "axios";

// Your unit tests for API functions
```

### `createUser.js`

```javascript
import { vi } from "vitest";

export const createUser = vi.fn((username, email) => {
  // Implementation of the create user function
  return { username, email };
});

// Add more API functions as needed
```

### `createUser.test.js`

```javascript
import { afterEach, describe, expect, it, vi } from "vitest";
import { createUser } from "../createUser.js";

// Your unit tests for the createUser function
```

### `isValidUserName.js`

```javascript
import { describe, it, expect } from "vitest";
import { isValidUsername } from "../isValidUserName.js";

// Your unit tests for the isValidUserName function
```

## Testing

### Unit Testing

To run unit tests:

```bash
npm test
```

![image](https://github.com/sndr157/BED_Testing/assets/127830026/ba9f92e8-5c97-413f-9768-c466d3c43f6f)



To run a specific test (e.g., `printUserData`):

```bash
npm test printUserData
```

### API Testing

To run API tests using Newman:

```bash
npm run test:api
```

This command executes Newman with the specified Postman collection and environment variables.

## Database

### `db.json`

Your JSON database file containing user, meal, and order data.

## Additional Tests

### `index.test.js`

```javascript
import { add } from "..";
import { describe, it, expect } from "vitest";

// Your unit tests for the add function
```
