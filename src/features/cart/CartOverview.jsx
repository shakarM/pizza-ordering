import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalQuantity, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const totalItems = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  if (!totalItems) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 pl-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalItems}pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <div className="pr-4">
        <a href="#">Open cart &rarr;</a>
        <Link to="/cart">Gotocart</Link>
      </div>
    </div>
  );
}

export default CartOverview;
