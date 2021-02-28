import axios from 'axios';
import { default as MockAdapter } from 'axios-mock-adapter';
import { fetchCounterData } from '../Components/ButtonWithDisplay';
import { baseUrl, endpoints, keys } from '../Config/api';

describe('fetch counter function', () => {
    let endpoint = `${baseUrl}/${endpoints.default}/${keys.default}`;

    test('success sets result', async () => {
      // arrange
      let setResult = jest.fn();

      let testValue = "123";
      let response = {
        value: testValue
      };
      new MockAdapter(axios)
        .onGet(endpoint)
        .reply(200, response);

      // act
      await fetchCounterData(setResult);

      // assert
      expect(setResult).toHaveBeenCalledWith(testValue);
    });

    test('failure does not set result', async () => {
      // arrange
      let setResult = jest.fn();

      new MockAdapter(axios)
        .onGet(endpoint)
        .reply(500);

      // act
      await fetchCounterData(setResult);

      // assert
      expect(setResult).not.toHaveBeenCalled();
    })
});
