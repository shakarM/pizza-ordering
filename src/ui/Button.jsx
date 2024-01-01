export default function ({ children, disabled, to, size, onClick }) {
  return (
    <button
      to={to}
      onClick={onClick}
      className={`${size} rounded-[0.5rem] bg-rose-500 px-1.5 py-2 
      font-semibold uppercase text-slate-100 duration-500 
      hover:bg-opacity-0 hover:text-rose-500 hover:duration-500`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
