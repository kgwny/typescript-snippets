const sortBy = <T extends object, K extends keyof T>(
  objects: T[],
  key: K
): T[] => {
  return objects.sort((a, b) => a[`${key}`] - b[`${key}`]);
};

const posts = [
  { id: 1, title: 'test1' },
  { id: 3, title: 'test3' },
  { id: 2, title: 'test2' },
];

console.log(sortBy(posts, 'id'));
// [
//   { id: 1, title: 'test1' },
//   { id: 2, title: 'test2' },
//   { id: 3, title: 'test3' }
// ]

console.log(sortBy(posts, 'name'));
// Argument of type '"name"' is not assignable to parameter of type '"id" | "title"'
