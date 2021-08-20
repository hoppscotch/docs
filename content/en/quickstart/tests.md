---
title: Tests
menuTitle: Post-request Tests
description: "Hoppscotch Guide to write pre-request scripts and tests for REST API"
position: 7
category: quickstart
---

You can write test scripts for your API requests in `javaScript`.

#### why write tests?

_As you introduce new code ,tests ensure that your API is working as intended. The higher your test coverage, the more flexible and bug-resistant your code will be , the less time you'll spend wondering why_[ _deleting a picture of a coconut breaks your code._](https://www.thegamer.com/this-coconut-jpg-in-team-fortress-2s-game-files-if-deleted-breaks-the-game-and-no-one-knows-why/)

# Writing Tests

In the last section <nuxt-link to='/quickstart/scripts'> pre-request scripting</nuxt-link> we worked with dynamically modifying requests. In this we'll work with the response received .

## `pw` API

Hoppscotch has a powerful API called `pw` which handles pre-requests and tests.

- [`.expect(value)`](a)
- [`.not`](a)
- [`.toBe(value)`](a)
- [`.toBeLevel2xx(value)`](a)
- [`.toBeLevel3xx(value)`](a)
- [`.toBeLevel4xx(value)`](a)
- [`.toBeLevel5xx(value)`](a)
- [`.toBeType(type)`](a)
- [`.toHaveLength(number)`](a)
- [`.test(name, fn)`](a)
- [`.repsonse.`](a)

Lets look at how to use `pw.expect()` and `pw.test()` to write our tests.

### pw.expect(`value`)

`expect` returns an expectation object, on which you can call matcher functions. The example below calls the matcher function `toBe` on the expectation object that is returned by calling `pw.expect` with the response id (`pw.response.body.id`) as an argument.

Use `pw.expect` directly for quick and convenient testing. Every `pw.expect` statement will generate a line on the test report.

```javascript
// This test will pass
pw.expect(1).toBe(1);

// This test will fail
pw.expect(2).not.toBe(2);
```

### .test(`name`,`fn`)

Create a group of tests, with the `name` as a string and `fn` as a callback function to write tests associated with the group. The test results will include the given `name` for better organization.

Wrap `expect` statements with `pw.test` to group and describe related statements.

```javascript
// This will return 4 lines on the test report, grouped under "Arithmetic operations"
pw.test("Arithmetic operations", () => {
  const size = 500 + 500;
  pw.expect(size).toBe(1000);
  pw.expect(size - 500).toBe(500);
  pw.expect(size * 4).toBe(4000);
  pw.expect(size / 4).toBe(250);
});
```

If neither a `pw.expect` nor `pw.test` statement is present, no test reports will be generated.

```javascript
// This will not generate any test reports
(99 + 1).toBe(100);
```

However you cannot nest `.test` within a `.test` callback function.

```javascript
pw.test("a group of tests", () => {
  pw.expect(10).toBe(10);
  // more tests here
});
```

### .toBe(`value`)

Test for exact equality using `toBe`.

```javascript
pw.expect(pw.response.body.category).toBe("Sneakers");
```

`toBe` uses strict equality and is recommended for primitive data types.

```javascript
// These tests will fail
pw.expect("hello").toBe("Hello");
pw.expect(5).toBe("5");
pw.expect([]).toBe([]);
```

### `.not`

Test for the inverse by adding `.not` before calling the matcher function.

```javascript
// These tests will pass
pw.expect(true).not.toBe(false);
pw.expect(200).not.toBeLevel3xx();
```

### .toBeLevelxxx()

There are four different matcher functions for quick and convenient testing of the http status code that is returned:

- `toBeLevel2xx()`
- `toBeLevel3xx()`
- `toBeLevel4xx()`
- `toBeLevel5xx()`

For example, an argument passed to `expect` must be within `200` and `299` inclusive to pass `toBeLevel2xx()`.

```javascript
// These tests will pass
pw.expect(204).toBeLevel2xx();
pw.expect(308).toBeLevel3xx();
pw.expect(404).toBeLevel4xx();
pw.expect(503).toBeLevel5xx();
```

If the argument passed to `expect` is a non-numeric value, it is first parsed with `parseInt()`.

```javascript
// This test will pass
pw.expect("404").toBeLevel4xx();
```

### .toBeType(`type`)

Use `.toBeType(type)` for type checking. The argument for this method should be `"string"`, `"boolean"`, `"number"`, `"object"`, `"undefined"`, `"bigint"`, `"symbol"` or `"function"`.

```javascript
// These tests will pass
pw.expect(5).toBeType("number");
pw.expect("Hello, world!").toBeType("string");

pw.expect(5).not.toBeType("string");
pw.expect("Hello, world!").not.toBeType("number");
```

### .toHaveLength(`number`)

Use `.toHaveLength(number)` to check that an object has a `.length` property and it is set to a certain numeric value.

```javascript
// These expectations will pass
pw.expect("hoppscotch").toHaveLength(10);
pw.expect("hoppscotch").not.toHaveLength(9);

pw.expect(["apple", "banana", "coconut"]).toHaveLength(3);
pw.expect(["apple", "banana", "coconut"]).not.toHaveLength(4);
```

### `.response`

Assert response data by accessing the `pw.response` object.

```javascript
// This test will pass
pw.test("Response is ok", () => {
  pw.expect(pw.response.status).toBe(200);
  pw.expect(pw.response.body).not.toHaveProperty("errors");
});
```

#### Currently supported response values

- `status`: -number- The status code as an integer.
- `headers`: -object- The response headers.
- `body`: -object- the data in the response. In many requests, this is the JSON sent by the server.

## Examples

### Testing status code

Let us write a test to check whether the response to our request has a status code of `200` and that there are no errors in the response body.
We'll use the URL `https://www.httpbin.org/status/200` and Method `GET`
In this case we'll need to write two `expect` statements one for checking the status and another for checking the response body.
However we can wrap `expect` statements with `pw.test` to group and describe related statements.

There are two ways to test the status code

- check if it is exactly `200` : `pw.expect(pw.response.status)toBe(200)`
- use the matcher functions for quick and convenient testing of the http status code ,in this case `toBeLevel2xx()` : `pw.expect(pw.response.status)toBeLevel2xx()`
  <code-group>

<code-block label = "Test Script" active>

```javascript
pw.test("Response is ok", () => {
  pw.expect(pw.response.status).toBe(200);
  pw.expect(pw.response.body).not.toHaveProperty("errors");
});
```

</code-block>

<code-block label="Alternate">

```javascript
pw.test("Response is ok", () => {
  pw.expect(pw.response.status).toBeLevel2xx();
  pw.expect(pw.response.body).not.toHaveProperty("errors");
});
```

</code-block>

</code-group>

These tests will sccuessfully pass once you send the request.

<img src="/Tests/response-dark.png" class="dark-img"  alt=""/>

<img src="/Tests/response-light.png" class="light-img"  alt=""/>

### Assert Properties from the response body

Parse the data as JSON and assert properties from the response body.
in this example we test whether a user id points to a particular user
Let us use the following GET API endpoint `https://reqres.in/api/users/10`.
We will use `.toBe` to assert specific values and `.toBeType` to assert specific data type as shown in the code snippet below.

<code-block label = "Test Script" active>

```javascript
pw.test("", () => {
  const user = pw.response.body.json();
  pw.expect(user.first_name).toBe("Byron");
  pw.expect(user.first_name).toBeType("string");
});
```

</code-block>
