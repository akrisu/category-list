import test, { Assertions } from 'ava';

import { applyShowOnHomeLogicForCategoryListElements } from '../applyShowOnHomeLogicForCategoryListElements';
import { categoryListElementMock } from '../mock';
import { CategoryListElement } from '../task';

import { TestCase } from './task.test';

type Given = Array<CategoryListElement>;
type Expected = Array<CategoryListElement>;

const exampleNotShownOnHomeCategory: CategoryListElement = {
  ...categoryListElementMock,
  showOnHome: false,
};

const exampleShownOnHomeCategory: CategoryListElement = {
  ...categoryListElementMock,
  showOnHome: true,
};

const macro = (t: Assertions, given: Given, expected: Expected) => {
  t.deepEqual(applyShowOnHomeLogicForCategoryListElements(given), expected);
};

const cases: Array<TestCase<Given, Expected>> = [
  {
    description:
      'should set showOnHome for all categories if their number is less than 5',
    given: Array(4).fill(exampleNotShownOnHomeCategory),
    expected: Array(4).fill(exampleShownOnHomeCategory),
  },
  {
    description:
      'should set showOnHome for all categories if their number is exactly 5',
    given: Array(5).fill(exampleNotShownOnHomeCategory),
    expected: Array(5).fill(exampleShownOnHomeCategory),
  },
  {
    description:
      'should set showOnHome only for 3 categories if their number is more than 5',
    given: Array(7).fill(exampleNotShownOnHomeCategory),
    expected: [
      ...Array(3).fill(exampleShownOnHomeCategory),
      ...Array(4).fill(exampleNotShownOnHomeCategory),
    ],
  },
];

cases.forEach(({ description, given: input, expected: result }) =>
  test(description, macro, input, result)
);
