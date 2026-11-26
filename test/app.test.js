import {suite, test} from "node:test";
import assert from "node:assert";
import { greet, greetInHindi } from "../app.js";
 
suite("Greeting Functions",() => {

test("check greet function", () => {
    const expected = "Hello, World!";
    const actual = greet("World");
assert.strictEqual(actual,expected);

test("check in Hindi(Greeting Function) ",() => {
    const expected = "Ram Ram Aditya";
    const actual = greetInHindi("Aditya");
    assert.strictEqual(actual,expected);
})
})
})
