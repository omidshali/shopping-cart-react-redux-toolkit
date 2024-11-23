import { useMemo } from "react";
import { useCartSelectore } from "../store/hooks";
import { CartItem } from "./cart-item";

export function CartList() {
  const carts = useCartSelectore((state) => state.cart.items);

  const renderCartList = useMemo(() => {
    if (carts.length > 0) {
      return carts.map((cart) => {
        return <CartItem key={cart.id} {...cart} />;
      });
    } else {
      return <span className="text-center mt-5">سبد خرید شما خالی است</span>;
    }
  }, [carts]);

  const totalPrice = carts.reduce(
    (value, item) => value + item.quantity * item.price,
    0
  );

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <span className="bg-slate-700 text-white w-full text-center py-2 rounded-t-md">
        سبد خرید
      </span>
      <div className="w-full px-4 flex flex-col h-full">
        <div className="flex flex-col w-full h-[50px] overflow-auto mx-auto mt-4 grow gap-y-1">
          {renderCartList}
        </div>
        <span className="text-left pb-4">قیمت کل: {totalPrice}</span>
      </div>
    </div>
  );
}
