import { API, Endpoint, Parameter } from './api';

describe('API', () => {
  it('should build the url for the employees endpoint', () => {
    let url = '';

    const api = new API();
    url = api.get(Endpoint.employees);

    expect(url).toBe('/employees');
 });

 it('should build the url for the customers endpoint', () => {
     let url = '';

     const api = new API();
     url = api.get(Endpoint.customers);

     expect(url).toBe('/customers');
 });

 it('should build the url for the items endpoint', () => {
     let url = '';

     const api = new API();
     url = api.get(Endpoint.items);

     expect(url).toBe('/items');
 });

 it('should add a limit to the url', () => {
     let url = '';

     const params: Parameter[] = [['limit', 10]];
     const api = new API();
     url = api.get(Endpoint.items, params);

     expect(url).toBe('/items?limit=10');
 });

 it('should add an offset to the url', () => {
     let url = '';

     const params: Parameter[] = [['offset', 10]];
     const api = new API();
     url = api.get(Endpoint.items, params);

     expect(url).toBe('/items?offset=10');
 });

 it('should add a greater than or equal to filter to the url', () => {
     let url = '';

     const params: Parameter[] = [['price_gte', 100]];
     const api = new API();
     url = api.get(Endpoint.items, params);

     expect(url).toBe('/items?price_gte=100');
 });

 it('should add a less than filter to the url', () => {
     let url = '';

     const params: Parameter[] = [['price_lt', 1000]];
     const api = new API();
     url = api.get(Endpoint.items, params);

     expect(url).toBe('/items?price_lt=1000');
 });

 it('should do all the things!', () => {
     let url = '';

     const params: Parameter[] = [
         ['price_gte', 100],
         ['price_lt', 1000],
         ['limit', 10],
         ['offset', 20],
     ];
     const api = new API();
     url = api.get(Endpoint.items, params);

     expect(url).toBe('/items?price_gte=100&price_lt=1000&limit=10&offset=20');
 });
});
