import { useCart } from "../../context/card-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const ProductCard=({product}) => {
  const {cart,cartDispatch}=useCart();
   
  const navigate=useNavigate()

  const isProductInCart=findProductInCart(cart,product.id)

  const onCartClick=(product)=>{
    !isProductInCart?
    cartDispatch({
      type:"ADD_TO_CART",
      payload:{product}
    }) : navigate('/cart')
  }



  return (
    <div className="card card-vertical d-flex direction-column relative">
      <div className="card-image-container relative">
        <img className="card-image" src={product.images[0]} alt="card" />
      </div>
      <div className="card-details">
        <div className="card-des">{product.title}</div>
        <div className="card-description">
          <p className="card-price">Rs. {product.price}</p>
        </div>
        <div className="cta-btn">
          <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            <i className="material-icons text-3xl hover:cursor-pointer">
              favorite
            </i>
            Add to Wishlist
          </button>
          <button
            onClick={() => onCartClick(product)}
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          >
            <i className="material-icons text-3xl hover:cursor-pointer">
              {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
            </i>
            {
              isProductInCart ?'Go to Cart': "Add To Cart"
            }
           
          </button>
        </div>
      </div>
    </div>
  );
}
