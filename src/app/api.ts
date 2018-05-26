interface APIInterface {
  get(endpoint: Endpoint, parameters?: Parameter[]): string;
}

enum Endpoint {
  items,
  customers,
  employees
}

type Parameter = [string, number];

function stringifyParams(params: Parameter[]): string {
  let stringParams = '?';
  params.forEach(item => {
    stringParams += `${item[0]}=${item[1]}&`;
  });

  return stringParams.slice(0, -1);
}

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

export { Endpoint, Parameter, API };
