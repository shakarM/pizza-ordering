import { useDispatch, useSelector } from "react-redux";

export default function UserName() {
  const dispatch = useDispatch();
  const username = useSelector((State) => State.user.userName);
  if (!username) return null;
  return <div className="hidden font-semibold md:block">{username}</div>;
}
