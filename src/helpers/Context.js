import { apiServices } from "../services/api.services";

let products = [];

const setProducts = async () => {
  products =
    JSON.parse(localStorage.getItem("products-food-patrick")) ||
    (await apiServices.getProducts());
  localStorage.setItem("products-food-patrick", JSON.stringify(products));
  return products;
};

export const Context = async (newData = null) => {
  let data = {
    userLogged: JSON.parse(localStorage.getItem("user-logged")) || null,
    userIsAdmin: JSON.parse(localStorage.getItem("user-is-admin")) || false,
    products: await setProducts(),
    cart: JSON.parse(localStorage.getItem("cart-food-patrick")) || [],
    inputValue: localStorage.getItem("input-search-value-food-patrick")
      ? localStorage.getItem("input-search-value-food-patrick")
      : "",
  };

  if (newData != null && JSON.stringify(newData) !== JSON.stringify(data)) {
    data = newData;
  }

  return data;
};