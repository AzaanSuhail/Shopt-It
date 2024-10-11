import { Navigate, useNavigate } from "react-router-dom";
export const Navbar = () => {
 const navigate=useNavigate();

  return (
    <header className="flex bg-green-900 py-4 px-8 text-slate-50">
      <div>
        <h1 onClick={()=>navigate('/')} className="text-4xl hover:cursor-pointer">Shop It</h1>
      </div>
      <nav className="ml-auto flex gap-8">
        <i onClick={()=>navigate('/wishlist')} className="material-icons text-3xl hover:cursor-pointer">favorite</i>
        <i onClick={()=>navigate('/cart')} className="material-icons text-3xl hover:cursor-pointer">
          shopping_cart
        </i>
        <i className="material-icons text-3xl hover:cursor-pointer  ">
          account_circle
        </i>
      </nav>
    </header>
  );
};
