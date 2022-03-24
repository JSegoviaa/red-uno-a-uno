export const formatPrice = (price: number) => {
  const precio = new Intl.NumberFormat("es-MX", {
    currency: "MXN",
  }).format(price);

  const formato = "$" + precio;

  return formato;
};
