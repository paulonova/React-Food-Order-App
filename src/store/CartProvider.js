import CartContext from "./cart-content";

const CartProvider = (props) => {
  const addItemToCartHandler = () => {};

  const removeItemsFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemsFromCartHandler,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
