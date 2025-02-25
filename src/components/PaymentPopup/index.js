import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import './index.css'

const PaymentPopup = ({cartItems, totalPrice}) => {
  const [selectedPayment, setSelectedPayment] = useState('')

  return (
    <Popup trigger={<button className="checkout-btn">Checkout</button>} modal>
      {close => (
        <div className="popup-container">
          <h2>Choose Payment Method</h2>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" disabled /> Card
            </label>
            <label>
              <input type="radio" name="payment" disabled /> Net Banking
            </label>
            <label>
              <input type="radio" name="payment" disabled /> UPI
            </label>
            <label>
              <input type="radio" name="payment" disabled /> Wallet
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="COD"
                onChange={() => setSelectedPayment('COD')}
              />{' '}
              Cash on Delivery
            </label>
          </div>

          <div className="summary">
            <p>Items: {cartItems.length}</p>
            <p>Total Price: ₹{totalPrice}</p>
          </div>

          <button
            className="confirm-btn"
            disabled={selectedPayment !== 'COD'}
            onClick={() => {
              alert('Your order has been placed successfully!')
              close()
            }}
          >
            Confirm Order
          </button>
        </div>
      )}
    </Popup>
  )
}

export default PaymentPopup
