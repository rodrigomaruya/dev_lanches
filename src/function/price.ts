export function formatPrice(price: number) {
  const formatter = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "JPY",
  });
  return formatter;
}
