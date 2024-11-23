import { createPortal } from "react-dom";
import { CartList } from "./cart-list";

type CartProps = {
  onClose: () => void;
};

export function ModalCart({ onClose }: CartProps) {
  return createPortal(
    <div className="fixed flex w-full items-center h-full justify-center">
      <div className="fixed w-full h-full bg-black opacity-65 flex justify-center items-center" />
      <div className="flex flex-col relative bg-white  h-[400px] w-[800px] rounded-lg  z-10">
        <div className="flex-grow ">
          <CartList />
        </div>
        <div className="flex px-4 pb-4 justify-between">
          <button className="primery-button text-white" onClick={onClose}>
            بستن
          </button>
          <button className="primery-button text-white">
            ادامه فرآیند خرید
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
}
