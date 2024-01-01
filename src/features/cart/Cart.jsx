import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCard } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCard);
  const username = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="ml-10 sm:ml-1">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-9 p-2 text-[1.5rem] font-bold text-rose-500">
        Your cart, {username}
      </h2>

      <div>
        <ul className="mb-2 divide-y divide-stone-200 p-2 pb-4 text-[1rem] font-semibold text-rose-500">
          {" "}
          {cart.map((item) => (
            <CartItem item={item} key={item} />
          ))}
        </ul>
        <div className="space-x-6">
          <Link to="/order/new">
            {" "}
            <Button>Order pizzas</Button>
          </Link>
          <Button onClick={() => dispatch(clearItem())}>Clear cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
