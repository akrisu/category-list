import { applyShowOnHomeLogicForCategoryListElements } from './applyShowOnHomeLogicForCategoryListElements';
import { getOrderFromCategory } from './getOrderFromCategory';
import { getShowOnHomeFromCategory } from './getShowOnHomeFromCategory';
import { Category } from './mockedApi';

export interface CategoryListElement {
  name: string;
  id: number;
  image: string;
  order: number;
  children: CategoryListElement[];
  showOnHome: boolean;
}

const sortCategoryListElementsByOrder = (
  category1: CategoryListElement,
  category2: CategoryListElement
) => category1.order - category2.order;

const mapCategoryToCategoryListElement =
  (depth = 0) =>
  (category: Category): CategoryListElement => {
    const { id, MetaTagDescription, name, children } = category;
    const isChild = depth !== 0;

    return {
      id,
      image: MetaTagDescription,
      name,
      order: getOrderFromCategory(category),
      children: category.hasChildren
        ? children
            .map(mapCategoryToCategoryListElement(depth + 1))
            .sort(sortCategoryListElementsByOrder)
        : [],
      showOnHome: getShowOnHomeFromCategory(category, isChild),
    };
  };

export const categoryTree = async (
  getCategoriesFn: () => Promise<{ data: Array<Category> }>
): Promise<CategoryListElement[]> => {
  const res = await getCategoriesFn();

  if (!res.data) {
    return [];
  }

  const categoryListElements = res.data
    .map(mapCategoryToCategoryListElement())
    .sort(sortCategoryListElementsByOrder);

  return applyShowOnHomeLogicForCategoryListElements(categoryListElements);
};
