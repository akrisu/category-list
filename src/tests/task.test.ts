import test from 'ava';

import { CORRECT } from '../correctResult';
import { getCategories } from '../mockedApi';
import { categoryTree } from '../task';

export type TestCase<I = unknown, R = unknown> = {
  description: string;
  given: I;
  expected: R;
};

test('categoryTree', async (t) => {
  const result = await categoryTree(getCategories);

  t.deepEqual(result, CORRECT);
});
