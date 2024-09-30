import { Category } from './mockedApi';
import { CategoryListElement } from './task';

export const getOrderFromCategory = (
  category: Category
): CategoryListElement['order'] => {
  const isNumberOrNumberWithHashMatch = category.Title.match(/^(\d+)(#.*)?$/);

  if (isNumberOrNumberWithHashMatch) {
    return parseInt(isNumberOrNumberWithHashMatch[1], 10);
  }

  return category.id;
};
