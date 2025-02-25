import React, {Component} from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'
import EmptyCartView from '../EmptyCartView'
import Header from '../Header'
import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList, removeAllCartItems} = value

          const onRemoveAllItems = () => {
            removeAllCartItems()
          }

          const totalItems = cartList.reduce(
            (count, item) => count + item.quantity,
            0,
          )

          return (
            <>
              <Header />
              <div className="cart-container">
                <h1 className="cart-heading">My Cart</h1>

                {cartList.length === 0 ? (
                  <EmptyCartView />
                ) : (
                  <>
                    <div className="remove-all-container">
                      <button
                        type="button"
                        className="remove-all-button"
                        onClick={onRemoveAllItems}
                      >
                        Remove All
                      </button>
                    </div>
                    <div className="cart-items-container">
                      <ul className="cart-list">
                        {cartList.map(eachItem => (
                          <CartItem
                            key={eachItem.id}
                            cartItemDetails={eachItem}
                          />
                        ))}
                      </ul>
                      <CartSummary />
                      <p data-testid="cart-items-count">
                        {totalItems} Items in cart
                      </p>
                      <button
                        type="button"
                        className="checkout-button"
                        data-testid="checkout"
                      >
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
