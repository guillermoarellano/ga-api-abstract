enum Endpoint {
  items,
  customers,
  employees
}

type Parameter = [string, number];

export class API {

  get(endpoint: Endpoint, parameters?: Parameter[]) {

  }
}
