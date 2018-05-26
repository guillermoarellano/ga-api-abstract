# API Interface Example using TypeScript

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Installation

Install [Node.js](https://nodejs.org/) and the Node Package Manager. Node version 7.10.1 or greater and NPM version 4.2.0 or greater.

Download or clone this project to your local machine. Run `npm install` to get the necessary libraries to run the tests.

## Running unit tests

Run `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

===================================================

## Description of the problem

_**May 26, 2018 Update**_: _Removed abstraction as a service. No need to add in the module providers._

The problem we needed to solve was to create an interface for the developers to call different API endpoints, with optional parameters, to retrieve data for the web app. This interface needed to be flexible to accomodate up to 100 endpoints and be able to pass various different parameters that would also be extendable in the future.

The API interface defines the `get` function signature. We implement the API interface in a class.  What you would need to provide for the GET function would be two parameters:

* An Endpoints enum that would define and enforce the multiple endpoints.
* An array of Parameter, which is a type consisting of a `string`, `number` tuple. This information is **optional**.

```typescript
interface APIInterface {
  get(endpoint: Endpoint, parameters?: Parameter[]): string;
}
```

The enum is required and can be easily extended in the future by simply adding a new value to the enumerator. TypeScript provides value checking for the different options one can pass.

```typescript
export enum Endpoint {
  items,
  customers,
  employees
}
```

## How the API Interface is Implemented

Here is the class that implements the `get` function signature in the interface. Let's describe the class:

```typescript
class API implements APIInterface {
  get(endpoint: Endpoint, parameters?: Parameter[]): string {
    let url = '/';
    url += Endpoint[endpoint];
    if (parameters !== undefined) {
      url += stringifyParams(parameters);
    }

    return url;
  }
}
```

After getting the enum string name, and starting the new we then need to check if the parameter array is passed in as well. If the parameter array is not undefined, then we call a function called `stringifyParams` that converts the array of tuples to a string and appends them to the request url.

```typescript
function stringifyParams(params: Parameter[]): string {
  let stringParams = '?';
  params.forEach((item) => {
    stringParams += `${item[0]}=${item[1]}&`;
  });

  return stringParams.slice(0, -1);
}
```

We are appending the parameters and values to the url by using the ampersand (&). This function can append as many parameters to the url string as needed. From here, you can use the resulting string to feed it to an actual HTTP service or do other manipulation.
