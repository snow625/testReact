export const getProductSelector = (store) => store.products;

export const getTotalQuantity = (store) => {
  const total = store.products.reduce((acc, el) => acc + el.quantity, 0);
  return total;
};
export const getTotalPrice = (store) => {
  const total = store.products.reduce(
    (acc, el) => acc + el.quantity * el.price,
    0
  );
  return total;
};
