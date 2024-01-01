import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, decreaseItem, increaseItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { getCurrentQunatityById } from "../cart/cartSlice";
import QuantityButton from "../../ui/QuantityButton";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentPizza = useSelector(getCurrentQunatityById(id));
  function handleClick() {
    const item = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(item));
  }

  return (
    <li className=" m-4 my-2 flex gap-4 p-4 py-7">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? " opacity-65 grayscale" : "opacity-100"} w-24`}
      />
      <div className="flex grow flex-col">
        <p className="font-black text-rose-500">{name}</p>
        <p className="font-semibold text-rose-400">{ingredients.join(", ")}</p>
        <div className="mt-auto flex justify-between  font-medium ">
          {!soldOut ? (
            <p className=" font-semibold text-rose-500">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-rose-300">Sold out</p>
          )}

          <div className="gap-2 space-x-3 text-right text-[0.75rem]">
            {!soldOut && (
              <>
                <QuantityButton onClick={() => dispatch(increaseItem(id))}>
                  +
                </QuantityButton>
                <QuantityButton onClick={() => dispatch(decreaseItem(id))}>
                  -
                </QuantityButton>
              </>
            )}
            {currentPizza && <DeleteItem pizzaId={pizza.id}>Delete</DeleteItem>}
            {!soldOut && !currentPizza && (
              <Button onClick={handleClick} type="small">
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
