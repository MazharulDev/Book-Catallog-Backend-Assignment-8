export const bookSearchableFields: string[] = [
  'title',
  'author',
  'price',
  'genre',
];

export const bookFilterableFields: string[] = [
  'search',
  'title',
  'author',
  'price',
  'genre',
  'categoryId',
];

export const bookRelationalFields: string[] = ['categoryId'];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
