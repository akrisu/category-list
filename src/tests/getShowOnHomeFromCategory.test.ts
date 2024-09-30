import test, { Assertions } from 'ava';

import { getShowOnHomeFromCategory } from '../getShowOnHomeFromCategory';
import { categoryMock } from '../mock';
import { Category } from '../mockedApi';

import { TestCase } from './task.test';

type Given = [category: Category, isChild: boolean];
type Expected = boolean;

const macro = (t: Assertions, given: Given, expected: Expected) => {
  t.is(getShowOnHomeFromCategory(...given), expected);
};

const cases: Array<TestCase<Given, Expected>> = [
  {
    description: 'should return false if given Category is child',
    given: [
      {
        ...categoryMock,
        Title: '#2',
      },
      true,
    ],
    expected: false,
  },
  {
    description:
      "should return false if given root Category doesn't have # in Title",
    given: [
      {
        ...categoryMock,
        Title: '2',
      },
      false,
    ],
    expected: false,
  },
  {
    description: 'should return true if given root Category have # in Title',
    given: [
      {
        ...categoryMock,
        Title: '#6',
      },
      false,
    ],
    expected: true,
  },
];

cases.forEach(({ description, given: input, expected: result }) =>
  test(description, macro, input, result)
);
