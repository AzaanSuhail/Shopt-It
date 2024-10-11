export const ProductCard=({product}) => {
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
          <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            <i className="material-icons text-3xl hover:cursor-pointer">
              shopping_cart
            </i>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
