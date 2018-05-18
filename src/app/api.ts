import { Injectable } from '@angular/core';

export enum Endpoint {
  items,
  customers,
  employees
}

export type Parameter = [
  string,
  number
];

function stringifyParams(params: Parameter[]): string {
  let stringParams = '?';
  params.forEach((item) => {
    stringParams += `${item[0]}=${item[1]}&`;
  });

  return stringParams.slice(0, -1);
}

@Injectable()
export class API {

  get(endpoint: Endpoint, parameters?: Parameter[]): string {
    let url = '/';

    url += Endpoint[endpoint];

    if (parameters !== undefined) {
      url += stringifyParams(parameters);
    }

    return url;
  }
}
