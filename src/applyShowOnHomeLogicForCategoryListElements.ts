import { CategoryListElement } from './task';

export const applyShowOnHomeLogicForCategoryListElements = (
  list: Array<CategoryListElement>
): Array<CategoryListElement> =>
  list.map((e, i) =>
    list.length <= 5
      ? { ...e, showOnHome: true }
      : { ...e, showOnHome: i < 3 ? true : false }
  );
