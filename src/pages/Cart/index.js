import { Navbar } from '../../components/Navabar.jsx'
import { useCart } from '../../context/card-context.js'
import { HorizontalProductCart } from '../../components/HorizontalProductCard/index.jsx'
import { PriceDetails } from '../../PriceDetails/index.jsx'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cart } = useCart()
  const navigate=useNavigate()

  return (
    <>
      <Navbar />
      
      <main className='flex flex-col items-center pt-6 '>
        {
            cart?.length>0 ? (
                 <>
        <h2 className='text-3xl font-bold pb-3'>My Cart</h2>

        <div className='flex gap-8'>
          <div className='flex flex-col gap-4 pt-2'>
            {cart?.length > 0 &&
              cart.map(product => (
                <HorizontalProductCart key={product.id} product={product} />
              ))}
          </div>

          <div>

          <PriceDetails/>
          </div>
        </div>
        </>
            )  : <div>
                <h2 className='text-3xl pb-3'>Cart is Empty</h2>
                <p className='underline text-[rgba(20 83 45)] font-bold hover:cursor-pointer' onClick={()=>navigate('/')}>Click to add items to cart</p>
            </div>
        }
       
        
      </main>
    </>
  )
}
