import test, { Assertions } from 'ava';

import { getOrderFromCategory } from '../getOrderFromCategory';
import { categoryMock } from '../mock';
import { Category } from '../mockedApi';

import { TestCase } from './task.test';

type Given = Category;
type Expected = number;

const macro = (t: Assertions, given: Given, expected: Expected) => {
  t.is(getOrderFromCategory(given), expected);
};

const cases: Array<TestCase<Given, Expected>> = [
  {
    description: 'should return id if Title is non-number string',
    given: {
      ...categoryMock,
      Title: 'abc2#',
      id: 10,
    },
    expected: 10,
  },
  {
    description: 'should return Title if Title is number',
    given: {
      ...categoryMock,
      Title: '2',
      id: 10,
    },
    expected: 2,
  },

  {
    description:
      'should return number from Title if Title is number with hash (#)',
    given: {
      ...categoryMock,
      Title: '6#',
      id: 10,
    },
    expected: 6,
  },
];

cases.forEach(({ description, given: input, expected: result }) =>
  test(description, macro, input, result)
);
