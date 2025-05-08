
  

#  Some differences between interfaces and types in TypeScript

  

## Introduction

  **Typescript** is strongly typed programming language allows depelopers to integrate types **to improve maintainability, scalability and type-safety**. **Strongly typed** code can perform better  on security by **abstracting sensitive data and enforcing strict types**, which helps to prevent   XSS attacks, prototype pollution, dynamic property access, logic bugs, and enforces strict API contracts .In **Typescript** we define types object shaped using `types` or `interface`.But they are **not at the same undder the hood!** 
  
 Let me  brief some deffereneces between **Interfaces** and **types** in `Typescript`

---

  

## Interfaces

 An **Interface** in typescript defined the object structure of the defined types including  **properties and methods** without implementing any functionality! It's like type skeleton of an `object`  or a value including **reusablity with extending the types**
 
 **Characteristics**
1. It describes object or class structures allows types for optional and read-only properties.
2. It can inherite types and have to create reusable types by using interfaces including type declaration merging
3. It can define data model a class.
4. It provides optional and Read only properties

### 📦 Syntax

  

```ts
//basic syntax
interface User  { 
	key : type of the value
};

//extend syntax
interface ExtendedUser extends User {
	key : type of the value
}
```

  

Here, `ID` can be  a string **or** a number **or** a boolean value.

  

###  Example Code

  

```ts

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
}
  

const user: User = {
  name: "Ashraful",
  age: 25,
};


```

  

📌 **Use Case**: Api Responses, Database Records, Class based structure, Validation schemas and Reusablity.

  

---

  

## Types

 `type` in **Typescript** used to define the shape of data like  object and including **primitive types, union types, tuples, and more**.

 **Characteristics**
1. Can alias different types of data like primitives, objects, tupples, functions etc.
2. Can create complex combinations using Union `|` or Intersaction `&`.
3. Can not declare the same multiple type alias at a time.
4. Can take advantage of mapped typing like generics types, conditional types etc..
  

### 📦 Syntax

  

```ts

type  ContactInfo  =  {  key : type of the value  };

type  Profile  =  {  key : type of the value  };

 //Union type
type PartialUser  =  ContactInfo | Profile;

//Intersection type
type  User  =  ContactInfo  &  Profile;

```

  

Now, `User` must have **both**  `email` and `username`.

  

### Example Code

  

```ts

type  Address  =  {

city:  string;

country:  string;

};

  

type  Person  =  {

name:  string;

age:  number;

};

  
//Intersection
type  Employee  =  Address  &  Person;

  

const  newHire:  Employee  =  {

name:  "Ashraful",

age:  27,

city:  "Dhaka",

country:  "Bangladesh"

};

```

  

📌 **Use Case**: Primitive types, Functions signature, Conditional mapped types etc.
  

---

---
***Conclusion***

 Types doesn't support inheritensnce because type defined the data types only better interfaces has capability to extend its property.But types allows to integrate primitive types like number, strings including union types, intersection types, tupples etc where interfaces are less flexible andn support multiple merging types. There will be type  merging conflict when same key assigned in terfaces but in type alias it will automatically detected the key.Interfaces and type aliases can be used to implement a class but there is a difference when a object trying to implement union types because TypeScript compiler expect a specific data shape.Types are best for mapped with generics types when developers required to have struggle with unknown  types.But both are usefull and rapidly used in Typescript, like i should say you can't imagine Typescript without types and interfaces.

---



 `type` in **Typescript** used to define the shape of data like  object and including **primitive types, union types, tuples, and more**.

 **Characteristics**
1. Can alias different types of data like primitives, objects, tupples, functions etc.
2. Can create complex combinations using Union `|` or Intersaction `&`.
3. Can not declare the same multiple type alias at a time.
4. Can take advantage of mapped typing like generics types, conditional types etc..
  

### 📦 Syntax

  

```ts

type  ContactInfo  =  {  key : type of the value  };

type  Profile  =  {  key : type of the value  };

 //Union type
type PartialUser  =  ContactInfo | Profile;

//Intersection type
type  User  =  ContactInfo  &  Profile;

```

  

Now, `User` must have **both**  `email` and `username`.

  

### Example Code

  

```ts

type  Address  =  {

city:  string;

country:  string;

};

  

type  Person  =  {

name:  string;

age:  number;

};

  
//Intersection
type  Employee  =  Address  &  Person;

  

const  newHire:  Employee  =  {

name:  "Ashraful",

age:  27,

city:  "Dhaka",

country:  "Bangladesh"

};

```

  

📌 **Use Case**: Primitive types, Functions signature, Conditional mapped types etc.
  

---

  
---
---


# Example of using Union and Intersection Types in TypeScript
  

Imagine that there is an application where one variable can be a `string`, a `number`, or even an `object`. Or maybe you want to create a type that must required properties from two or more `types` which are defined on various or multiple variables. That's why **Union (`|`)** and **Intersection (`&`)** types come in.

  

---

  

## Union Types

  

A **Union Type** allows a value to be **one of several types**. It's like saying:  value could be a string **or** a number **or** a boolean. **or**  **defined**  **types**

  

We use the (`|`) symbol to define union types.

  

### 📦 Syntax

  

```ts

type  ID  =  string  |  number  |  boolean;

```

  

Here, `ID` can be  a string **or** a number **or** a boolean value.

  

###  Example Code

  

```ts

function  printUserId(id:  string  |  number)  {

if (typeof  id  ===  'string') {

console.log("Your ID (string):",  id.toUpperCase());

}  else  {

console.log("Your ID (number):",  id.toFixed(2));

}

}

  

printUserId("abc123");  // Your ID (string): ABC123

printUserId(456.789);  // Your ID (number): 456.79

```
  

---

  

## Intersection Types

  

An **Intersection Type** allows you to **combine multiple types into one** like **merging** the types. It’s like saying: **value must have all the properties of Type `A` **and** Type `B`.**

  

We use the (`&`) symbol to define intersection types.

  

### 📦 Syntax

  

```ts

type  ContactInfo  =  {  email:  string  };

type  Profile  =  {  username:  string  };

  

type  User  =  ContactInfo  &  Profile;

```

  

Now, `User` must have **both**  `email` and `username`.

  

### Example Code

  

```ts

type  Address  =  {

city:  string;

country:  string;

};

  

type  Person  =  {

name:  string;

age:  number;

};

  

type  Employee  =  Address  &  Person;

  

const  newHire:  Employee  =  {

name:  "Ashraful",

age:  27,

city:  "Dhaka",

country:  "Bangladesh"

};

```
  

---

---

---
