# MbxCodeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Installation

Install [Node.js](https://nodejs.org/) and the Node Package Manager. Node version 7.10.1 or greater and NPM version 4.2.0 or greater.

Download or clone this project to your local machine. Run `npm install` to get the necessary libraries to run the tests.

## Running unit tests

Run `npm test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

===================================================

## How API interface works

The problem we needed to solve was to create an abstract for the developers to call different API endpoints, with optional parameters, to retrieve data for the web app. This interface needed to be flexible to accomodate up to 100 endpoints and be able to pass various different parameters that would also be extendable in the future.

The API abstract was implemented as a service that could be injected into a component that needs it. Once the API service is injected, all you would need to provide for a simple GET method would be two parameters:

* An Endpoints enum that would define and enforce the multiple endpoints.
* An array of Parameter, which is a type consisting of a `string`, `number` tuple. This information is **optional**.

```code
 api.get(Endpoint, Parameter[]);
```

The enum is required and can be easily extended in the future by simply adding a new value to the enumerator. TypeScript provides value checking for the different options one can pass.

```code
export enum Endpoint {
  items,
  customers,
  employees
}
```

After getting the enum string name, we then need to check if the parameter array is passed in as well. If the parameter array is not undefined, then we call a function called `stringifyParams` that converts the array of tuples to a string and appends them to the request url.

```code
function stringifyParams(params: Parameter[]): string {
  let stringParams = '?';
  params.forEach((item) => {
    stringParams += `${item[0]}=${item[1]}&`;
  });

  return stringParams.slice(0, -1);
}
```

We are appending the parameters and values to the url by using the ampersand (&). This function can append as many parameters to the url string as needed.
