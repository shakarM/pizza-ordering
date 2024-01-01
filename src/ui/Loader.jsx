import "./Loader.css";
export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-rose-500/20 backdrop-blur-sm">
      <div className="loader rounded-md"></div>
    </div>
  );
}
