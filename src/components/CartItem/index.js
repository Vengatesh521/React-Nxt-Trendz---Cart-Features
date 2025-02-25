import React from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = ({cartItemDetails}) => {
  const {id, title, brand, price, imageUrl, quantity} = cartItemDetails

  return (
    <CartContext.Consumer>
      {value => {
        const {
          removeCartItem,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
        } = value

        const onRemoveCartItem = () => {
          removeCartItem(id)
        }

        const onDecrementQuantity = () => {
          decrementCartItemQuantity(id)
        }

        const onIncrementQuantity = () => {
          incrementCartItemQuantity(id)
        }

        return (
          <li className="cart-item">
            <img className="cart-product-image" src={imageUrl} alt={title} />
            <div className="cart-item-details-container">
              <div className="cart-product-title-brand-container">
                <p className="cart-product-title">{title}</p>
                <p className="cart-product-brand">by {brand}</p>
              </div>
              <div className="cart-quantity-container">
                <button
                  data-testid="minus"
                  type="button"
                  onClick={onDecrementQuantity}
                  className="quantity-controller-button"
                >
                  <BsDashSquare color="#52606D" size={12} />
                </button>
                <p data-testid={`quantity-${id}`} className="cart-quantity">
                  {quantity}
                </p>
                <button
                  data-testid="plus"
                  type="button"
                  onClick={onIncrementQuantity}
                  className="quantity-controller-button"
                >
                  <BsPlusSquare color="#52606D" size={12} />
                </button>
              </div>
              <div className="total-price-remove-container">
                <p className="cart-total-price">Rs {price * quantity}/-</p>
                <button
                  data-testid="remove"
                  className="remove-button"
                  type="button"
                  onClick={onRemoveCartItem}
                >
                  Remove
                </button>
              </div>
            </div>
            <button
              className="delete-button"
              type="button"
              onClick={onRemoveCartItem}
            >
              <AiFillCloseCircle color="#616E7C" size={20} />
            </button>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartItem
