export const formatPrice = (price: number) => {
  const precio = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);

  return precio;
};
