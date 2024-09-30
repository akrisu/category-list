import { Category } from './mockedApi';
import { CategoryListElement } from './task';

export const categoryMock: Category = {
  id: 1,
  name: 'Foo',
  hasChildren: false,
  url: '',
  children: [],
  Title: '',
  MetaTagDescription: '',
};

export const categoryListElementMock: CategoryListElement = {
  id: 1,
  name: 'Foo',
  image: '',
  order: 1,
  children: [],
  showOnHome: false,
};
