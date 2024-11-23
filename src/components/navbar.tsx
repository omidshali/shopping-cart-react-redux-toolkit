import { useMemo, useState } from "react";
import { ModalCart } from "./modal-cart";
import { useCartSelectore } from "../store/hooks";

export function Navbar() {
  const cartState = useCartSelectore((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseCart = () => setIsOpen(false);

  const countCartItems = useMemo(() => {
    return cartState.reduce((value, item) => value + item.quantity, 0);
  }, [cartState]);

  return (
    <div className="fixed h-[70px] flex items-center bg-backGround-color w-full">
      <button
        className="border border-white rounded-md px-8 py-2"
        onClick={() => setIsOpen(true)}
      >
        سبد خرید ({countCartItems})
      </button>
      {isOpen && <ModalCart onClose={handleCloseCart} />}
    </div>
  );
}
