import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../ui/Home.jsx";
import Menu, { loader as menuLoader } from "../features/menu/Menu.jsx";
import Cart from "../features/cart/Cart.jsx";
import CreateOrder, {
  action as CreateOrderAction,
} from "../features/order/CreateOrder.jsx";
import Order, { loader as orderLoader } from "../features/order/Order.jsx";
import AppLayout from "../ui/AppLayout.jsx";
import Error from "../ui/Error.jsx";
import "./index.css";
import { action as actionLoader } from "../features/order/UpdateOrder.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        // eslint-disable-next-line react/react-in-jsx-scope
        element: <Home />,
      },
      {
        path: "/menu",

        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: actionLoader,
      },
    ],
  },
]);

function App() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <RouterProvider router={router} />;
}

export default App;
