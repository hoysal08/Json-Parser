# JSON Parser

This project contains a JSON parser written in TypeScript.Building a JSON parser is an easy way to learn about parsing techniques which are useful for everything from parsing simple data formats through to building a fully featured compiler for a programming language.

## Overview

The parser is capable of parsing JSON strings into a JavaScript object. It supports all standard JSON data types: strings, numbers, booleans, null, arrays, and objects.

## Usage

Import the `JSONParser` class from the `index.ts` file. Create a new instance of the class, passing the JSON string to be parsed to the constructor. Call the `parse` method to parse the JSON string.

```typescript
import { JSONParser } from "./index";

const parser = new JSONParser('{"key": "value"}');
const result = parser.parse();

console.log(result); // Outputs: { key: 'value' }
```
## Running the Demo

You can run the `demo.ts` file to see the JSON parser in action. Pass the path to a JSON file as an argument when running the script. For example:

```bash
node demo.ts tests/step4/valid.json
```
The tests folder contains some examples of valid and invalid JSON files that you can use to test the parser.# Json-Parser
