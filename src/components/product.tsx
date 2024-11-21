import { useCartDispatch } from "../store/hooks";
import { addToCart } from "../store/cart-slice";
type ProductProps = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export function Product({ id, title, price, image }: ProductProps) {
  const dispatch = useCartDispatch();
  function handleAddtoCart() {
    dispatch(addToCart({ id, title, price }));
  }
  return (
    <div className="bg-[#1a1c1e] rounded-lg">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="flex flex-col w-full items-center p-4 gap-3">
        <h2 className="font-bold text-lg">{title}</h2>
        <span>{price} $</span>
        <button className="primery-button" onClick={handleAddtoCart}>
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
