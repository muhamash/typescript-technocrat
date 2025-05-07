
# 🧩 Union and Intersection Types in TypeScript

## 📘 Introduction

In TypeScript, **Union** and **Intersection** types help us combine multiple types in flexible and powerful and reusable ways. These features allow developers to build scalable and type-safe code by either **merging multiple types** or **allowing multiple possibilities**.

Imagine that there is an application where one variable can be a `string`, a `number`, or even an object. Or maybe you want to create a type that must include properties from two or more types. That's where **Union (`|`)** and **Intersection (`&`)** types come in.

It improve code readability, reusability, and maintainability, especially when defining complex data structures or API response types.

---

## 🔀 Union Types

A **Union Type** allows a value to be **one of several types**. It's like saying: *"value could be a string **or** a number **or** a boolean. **or** **defined** **types**"*

We use the (`|`) symbol to define union types.

### 📦 Syntax

```ts
type ID = string | number | boolean;
```

Here, `ID` can be **either** a string **or** a number **or** a boolean value.

### 🧪  Example Code

```ts
function printUserId(id: string | number) {
  if (typeof id === 'string') {
    console.log("Your ID (string):", id.toUpperCase());
  } else {
    console.log("Your ID (number):", id.toFixed(2));
  }
}

printUserId("abc123");  // Your ID (string): ABC123
printUserId(456.789);   // Your ID (number): 456.79
```

📌 **Use Case**: Useful when dealing with APIs or user inputs that might return different types.

---

## 🔗 Intersection Types

An **Intersection Type** allows you to **combine multiple types into one** like **merging** the types. It’s like saying: *"value must have all the properties of Type A **and** Type B."*

We use the (`&`) symbol to define intersection types.

### 📦 Syntax

```ts
type ContactInfo = { email: string };
type Profile = { username: string };

type User = ContactInfo & Profile;
```

Now, `User` must have **both** `email` and `username`.

### 🧪  Example  Code

```ts
type Address = {
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
};

type Employee = Address & Person;

const newHire: Employee = {
  name: "Ashraful",
  age: 27,
  city: "Dhaka",
  country: "Bangladesh"
};
```

📌 **Use Case**: Great when building types that share structures — like merging roles, privileges, or extended object definitions.

---

## ✅ Conclusion

Both **Union** and **Intersection** types are fundamental to writing clean, scalable TypeScript code. They allow you to:

- Write safer logic by clearly defining the possible types
- Reuse and combine existing types for more complex structures
- Reduce duplication and increase code readability

If you're serious about mastering TypeScript, understanding how and when to use these types will take your skills to the next level.

---