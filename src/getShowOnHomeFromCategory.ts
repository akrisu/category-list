import { Category } from './mockedApi';

export const getShowOnHomeFromCategory = (
  category: Category,
  isChild: boolean
) => {
  if (isChild) {
    return false;
  }

  return category.Title.includes('#');
};
