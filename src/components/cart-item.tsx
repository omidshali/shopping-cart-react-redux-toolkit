import { useCartDispatch } from "../store/hooks";
import { removeFromCart, addToCart } from "../store/cart-slice";

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

export function CartItem({ id, title, price, quantity }: CartItemProps) {
  const dispatch = useCartDispatch();
  function handleAddItemToCart() {
    dispatch(addToCart({ id, title, price }));
  }
  function handleremoveItemfromCart() {
    dispatch(removeFromCart(id));
  }
  return (
    <div className="grid grid-cols-3 bg-gray-400 rounded-md  px-4">
      <span>{title}</span>
      <span className="flex justify-center">{price} $</span>
      <span className="flex gap-x-2 justify-end">
        <button onClick={handleAddItemToCart}>+</button>
        {quantity}
        <button onClick={handleremoveItemfromCart}>-</button>
      </span>
    </div>
  );
}
