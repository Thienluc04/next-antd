export const getListUser = async (): Promise<User[]> => {
  const response = await fetch('http://localhost:3005/users');

  const data = response.json();

  return data;
};

export const getListProduct = async (): Promise<Product[]> => {
  const response = await fetch('http://localhost:3005/products');

  const data = response.json();

  return data;
};
