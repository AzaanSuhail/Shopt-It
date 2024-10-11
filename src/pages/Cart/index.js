import { Navbar } from '../../components/Navabar.jsx'
import { useCart } from '../../context/card-context.js'
import { HorizontalProductCart } from '../../components/HorizontalProductCard/index.jsx'
import { PriceDetails } from '../../PriceDetails/index.jsx'

export const Cart = () => {
  const { cart } = useCart()

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center pt-6 '>
        
        <h2 className='text-3xl font-bold pb-3'>My Cart</h2>

        <div className='flex gap-8'>
          <div className='flex flex-col gap-4 pt-2'>
            {cart?.length > 0 &&
              cart.map(product => (
                <HorizontalProductCart key={product.id} product={product} />
              ))}
          </div>

          <div>
           {cart?.length>0 &&  <PriceDetails /> }
           <p className='relative right-3'>Cart is Empty</p>
                                                         
          
          </div>
        </div>
      </main>
    </>
  )
}
