function Button({ children }) {
  return (
    <button className="mx-0 my-3 block rounded border-0 bg-tertiary px-4 py-1 transition-all duration-300 hover:bg-slate-700 sm:mx-1 sm:inline-block">
      {children}
    </button>
  );
}

export default Button;
