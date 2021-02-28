import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import ButtonWithDisplay from '../Components/ButtonWithDisplay';

jest.mock('axios');

test('fetches data on render', async () => {
  // arrange
  let testValue = "123";
  axios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      value: testValue
    }
  }));

  // act
  await act(async () => {
    render(<ButtonWithDisplay />);
  });

  // assert
  let observedValue = screen.getByText(testValue);
  expect(observedValue).toBeInTheDocument();
});

test('fetches data on click', async () => {
  // arrange
  let initialTestValue = "123";
  let updatedTestValue = "124";
  axios.get
    .mockImplementationOnce(() => Promise.resolve({
      data: {
        value: initialTestValue
      }
    }))
    .mockImplementationOnce(() => Promise.resolve({
      data: {
        value: updatedTestValue
      }
    }));

  // act
  await act(async () => {
    render(<ButtonWithDisplay />);
    let component = screen.getByText(/increment counter/i);
    userEvent.click(component);
  });

  // assert
  let observedValue = screen.getByText(updatedTestValue);
  expect(observedValue).toBeInTheDocument();
});