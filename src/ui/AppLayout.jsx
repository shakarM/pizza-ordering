import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Header from "./HEader";
import CartOverview from "../features/cart/CartOverview";
import { lazy } from "react";
import Loader from "./Loader";

const lazyy = lazy(() => import("../features/menu/Menu"));
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="my-10 overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
