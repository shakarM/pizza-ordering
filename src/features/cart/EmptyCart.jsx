import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="p-9">
      <LinkButton to="/menu">&larr; Back to menu 🙏🏻 </LinkButton>

      <p className="mt-5 text-lg font-semibold text-rose-500">
        Your cart is still empty. Start adding some pizzas{" "}
        <span className="text-[2rem]">😔</span>
      </p>
    </div>
  );
}

export default EmptyCart;
