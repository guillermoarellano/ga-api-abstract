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


@Injectable()
export class API {

  get(endpoint: Endpoint, parameters?: Parameter[]): string {
    let url = '/';

    url += Endpoint[endpoint];


    return url;
  }
}
