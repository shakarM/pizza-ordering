import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decreaseItem, deleteItem, increaseItem } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import QuantityButton from "../../ui/QuantityButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="py-5">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between  pt-2">
        <p className=" ">{formatCurrency(totalPrice)}</p>
        <div className="m-3 space-x-4">
          <QuantityButton onClick={() => dispatch(increaseItem(pizzaId))}>
            +
          </QuantityButton>
          <QuantityButton onClick={() => dispatch(decreaseItem(pizzaId))}>
            -
          </QuantityButton>
          <DeleteItem pizzaId={pizzaId}>Delete</DeleteItem>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
