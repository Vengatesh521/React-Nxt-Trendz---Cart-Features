import {useContext} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const {cartList} = useContext(CartContext)

  const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)
  const totalAmount = cartList.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  )

  return (
    <div className="cart-summary">
      <h3>Order Total</h3>
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Amount: ₹{totalAmount}</h3>
    </div>
  )
}

export default CartSummary
