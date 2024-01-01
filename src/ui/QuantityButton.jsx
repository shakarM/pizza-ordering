export default function QuantityButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" py-0.75 rounded-[0.5rem] bg-rose-500 px-1.5
      text-lg font-semibold uppercase text-slate-100  duration-500
      hover:bg-opacity-0 hover:text-rose-500 hover:duration-500"
    >
      {children}
    </button>
  );
}
