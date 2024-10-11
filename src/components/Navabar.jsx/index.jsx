export const Navbar = () => {
  return (
    <header className="flex bg-green-900 py-4 px-8 text-slate-50">
      <div>
        <h1 className="text-5xl">Shop It</h1>
      </div>
      <nav className="ml-auto flex gap-8">
        <i className="material-icons text-3xl hover:cursor-pointer">favorite</i>
        <i className="material-icons text-3xl hover:cursor-pointer">
          shopping_cart
        </i>
        <i className="material-icons text-3xl hover:cursor-pointer  ">
          account_circle
        </i>
      </nav>
    </header>
  );
};
