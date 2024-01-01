import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCard, getTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const {
    username,
    status: addressStatus,
    position,
    address,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const cart = useSelector(getCard);
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center  text-center">
      <h2 className="mb-8 mr-10 text-[1.3rem] font-bold text-rose-500">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="text-left">
        <div>
          <div>
            <label className="text-md block font-semibold text-stone-500">
              First Name
            </label>{" "}
            <input
              className="input h-10  w-[30rem] pl-3 text-stone-800"
              placeholder={username}
              defaultValue={username}
              type="text"
              name="customer"
              required
            />
          </div>

          <div>
            <label className="text-md block font-semibold text-stone-500">
              Phone number
            </label>
            <div>
              <input
                className="input h-10  w-[30rem] pl-3 text-stone-800"
                placeholder="07xxx xxxx xxx"
                type="tel"
                name="phone"
                required
              />
              {formErrors?.phone && <p>{formErrors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="text-md block font-semibold text-stone-500">
              Address
            </label>
            <div className="relative">
              {
                <input
                  type="text"
                  name="address"
                  placeholder="e.g. farmanbaran"
                  className="input text relative h-10 w-[30rem] pl-3 text-stone-800"
                  required
                  defaultValue={address}
                />
              }
              {!position.latitude && !position.longtitude && (
                <span
                  className="absolute right-2
              
              "
                >
                  <button
                    className="
                ounded-[0.5rem] rounded-lg bg-rose-500 px-1.5 py-2 
                font-semibold text-slate-100 duration-500 
                hover:bg-opacity-0 hover:text-rose-500 hover:duration-500"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                    }}
                    disabled={isLoadingAddress}
                  >
                    Get address
                  </button>
                </span>
              )}
            </div>
            {addressStatus === "error" && (
              <p className="mt-5 rounded-md bg-rose-400 p-1 text-white">
                There is an error with the locaton
              </p>
            )}
          </div>

          <div className="mb-2 mt-8">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="h-4 w-4"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label className="text-stone-600" htmlFor="priority">
              Want to give your order priority?
            </label>
          </div>

          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <Button disabled={isSubmitting}>
              {isSubmitting
                ? "Placing the order..."
                : `Order now with ${totalPrice}`}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearItem);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
